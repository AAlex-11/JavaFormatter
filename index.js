import { formatJavaSourceCode } from "./javaFormatter.js";

const JavaSource = `package com.voipplus.mmsclient.WebRTC;

import livekit.org.webrtc.IceCandidate;
import livekit.org.webrtc.SessionDescription;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.WebSocket;
import okhttp3.WebSocketListener;
import org.json.JSONException;
import org.json.JSONObject;

public class SignalingManager {
    private static final String TAG = "SignalingManager";
    private String signalingServerUrl;
    private WebSocket webSocket;
    private boolean webSocketConnected = false;
    private final WebRTCService webRTCService;

    public SignalingManager(WebRTCService webRTCService) {
        this.webRTCService = webRTCService;
    }

    // <editor-fold desc="Initialization and Configuration">
    public void setSignalingServerUrl(String url) {
        WebRTCUtils.debugInfo(TAG, "🔗 Setting WebSocket URL: " + url,
                webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
        this.signalingServerUrl = url;
        initWebSocket();
    }
    // </editor-fold>

    // <editor-fold desc="WebSocket Management">
    public void initWebSocket() {
        WebRTCUtils.debugInfo(TAG, "🌍 initWebSocket: Called. webSocketConnected=" + webSocketConnected,
                webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);

        if (signalingServerUrl == null || signalingServerUrl.isEmpty()) {
            WebRTCUtils.debugInfo(TAG, "❌ WebSocket URL is not set. Cannot initialize WebSocket.",
                    webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                    webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
            return;
        }

        if (webSocketConnected) {
            WebRTCUtils.debugInfo(TAG, "✅ WebSocket is already connected.",
                    webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                    webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
            return;
        }

        webRTCService.updateWebRTCState(WebRTCState.CONNECTING_WEBSOCKET);

        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder().url(signalingServerUrl).build();
        webSocket = client.newWebSocket(request, new WebSocketListener() {
            @Override
            public void onOpen(WebSocket webSocket, Response response) {
                WebRTCUtils.debugInfo(TAG, "✅ WebSocket connected.",
                        webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                        webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
                webSocketConnected = true;
                webRTCService.updateWebRTCState(WebRTCState.WEBSOCKET_CONNECTED);
            }

            @Override
            public void onMessage(WebSocket webSocket, String text) {
                WebRTCUtils.debugInfo(TAG, "📩 Received WebSocket message: " + text,
                        webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                        webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);

                try {
                    JSONObject json = new JSONObject(text);
                    String type = json.getString("type");

                    WebRTCUtils.debugInfo(TAG, "📡 Answer type" + type,
                            webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                            webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);



                    if ("answer".equals(type)) {
                        String sdp = json.getString("sdp");
                        SessionDescription remoteSessionDescription = new SessionDescription(SessionDescription.Type.ANSWER, sdp);

                        WebRTCUtils.debugInfo(TAG, "📡 Received SDP Answer: Applying...",
                                webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                                webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);

                        // 🔴 Ensure we call handleRemoteAnswer properly
                        webRTCService.handleRemoteAnswer(remoteSessionDescription);
                    }
                    else if ("candidate".equals(type)) {
                        IceCandidate candidate = new IceCandidate(
                                json.getString("sdpMid"),
                                json.getInt("sdpMLineIndex"),
                                json.getString("candidate")
                        );

                        WebRTCUtils.debugInfo(TAG, "📡 Received ICE Candidate: " + candidate.sdp,
                                webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                                webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);

                        webRTCService.getPeerConnectionManager().handleIceCandidate(candidate);
                    }
                } catch (JSONException e) {
                    WebRTCUtils.debugInfo(TAG, "❌ Failed to parse WebSocket message: " + text,
                            webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                            webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
                }
            }


            @Override
            public void onFailure(WebSocket webSocket, Throwable t, Response response) {
                WebRTCUtils.debugInfo(TAG, "❌ WebSocket connection failed: " + t.getMessage(),
                        webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                        webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
                webSocketConnected = false;
                webRTCService.updateWebRTCState(WebRTCState.ERROR);
            }
        });
    }

    public boolean isWebSocketConnected() {
        return webSocketConnected;
    }

    public boolean isWebSocketReady() {
        return webRTCService.getWebRTCState() == WebRTCState.WEBSOCKET_CONNECTED;
    }
    // </editor-fold>

    // <editor-fold desc="Signaling Message Handling">
    public void sendSignalingMessage(String message) {
        WebRTCUtils.debugInfo(TAG, "sendSignalingMessage: Called. webRTCState=" + webRTCService.getWebRTCState() +
                        ", webSocketConnected=" + webSocketConnected +
                        ", message=" + message,
                webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);

        if (!webSocketConnected) {
            WebRTCUtils.debugInfo(TAG, "❌ WebSocket is not connected. Cannot send signaling message.",
                    webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                    webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
            return;
        }

        if (webSocket != null) {
            webSocket.send(message);
        } else {
            WebRTCUtils.debugInfo(TAG, "❌ WebSocket is null. Cannot send signaling message.",
                    webRTCService.getWebRTCState(), webRTCService.safeGetPeerConnection(),
                    webRTCService.safeGetDataChannel(), webSocket, signalingServerUrl);
        }
    }

    public void sendIceCandidateToSignalingServer(IceCandidate iceCandidate) {
        sendSignalingMessage("{\"type\": \"candidate\", \"candidate\": \"" + iceCandidate.sdp + "\", " +
                "\"sdpMid\": \"" + iceCandidate.sdpMid + "\", \"sdpMLineIndex\": " + iceCandidate.sdpMLineIndex + "}");
    }
    // </editor-fold>

    // <editor-fold desc="Accessors">
    public String getSignalingServerUrl() {
        return signalingServerUrl;
    }

    public WebSocket getWebSocket() {
        return webSocket;
    }
    // </editor-fold>
}

`



const result = formatJavaSourceCode(JavaSource);
console.log(`<div class="csharpcode">`)
console.log(result); 
console.log(`</div>`)