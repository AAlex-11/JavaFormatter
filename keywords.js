export const JavaKeyword = {
  DataTypes: ["byte", "short", "int", "long", "float", "double", "char", "boolean", "null"],
  ControlFlow: ["if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return"],
  ClassAndObjectManagement: ["class", "interface", "extends", "implements", "new", "this", "super", "instanceof"],
  AccessModifiers: ["public", "private", "protected", "static", "final"],
  ExceptionHandling: ["try", "catch", "finally", "throw", "throws"],
  OtherKeywords: ["void", "package", "import", "enum", "assert", "transient", "volatile", "synchronized", "native", "strictfp"],
  AndroidLifecycleKeywords: ["onCreate()", "onStart()", "onResume()", "onPause()", "onStop()", "onDestroy()", "onRestart()"],
  UIComponents: ["Activity", "Fragment", "View", "Button", "TextView", "RecyclerView", "ListView"],
  IntentsAndNavigation: ["Intent", "Bundle", "startActivity()", "startService()"],
  AsynchronousOperations: ["AsyncTask", "Handler", "Thread", "Runnable"],
  Annotations: ["Override", "NonNull", "Nullable", "SuppressLint"],
  Wrapper: ["String", "Date", "Byte", "Short", "Integer", "Float", "Double", "Boolean", "Character"],
  WellknownRefTypes: [  
    // Collections Framework  
    'List', 'ArrayList', 'LinkedList', 'Vector', 'Stack', 'Queue', 'Deque', 'PriorityQueue',  
    'Set', 'HashSet', 'LinkedHashSet', 'TreeSet',  
    'Map', 'HashMap', 'LinkedHashMap', 'TreeMap', 'ConcurrentHashMap',  
    'Collections', 'Arrays',  
    // Regular Expressions  
    'Pattern', 'Matcher',  
    // File Handling  
    'File', 'FileInputStream', 'FileOutputStream', 'BufferedReader', 'BufferedWriter', 'PrintWriter',  
    'Scanner', 'RandomAccessFile',  
    // Date and Time  
    'Date', 'Calendar', 'TimeZone', 'LocalDate', 'LocalTime', 'LocalDateTime', 'Instant', 'Duration',  
    // Threading & Concurrency  
    'Thread', 'Runnable', 'ExecutorService', 'ThreadPoolExecutor', 'Future', 'Semaphore', 'CountDownLatch',  
    // Math & Number Handling  
    'Math', 'BigInteger', 'BigDecimal', 'Random',  
    // I/O Streams  
    'InputStream', 'OutputStream', 'FileReader', 'FileWriter', 'ObjectInputStream', 'ObjectOutputStream',  
    // Android-Specific Classes  
    'Context', 'Activity', 'Fragment', 'Intent', 'Bundle', 'Handler', 'Looper', 'View',  
    'TextView', 'EditText', 'Button', 'ImageView', 'RecyclerView', 'SharedPreferences',  
    'Toast', 'AlertDialog', 'Notification', 'PendingIntent',  
    // JSON Handling  
    'JSONObject', 'JSONArray', 'Gson', 'JsonParser','JSONException',  
    // Networking  
    'URL', 'HttpURLConnection', 'OkHttpClient', 'Request', 'Response', 'Retrofit',  
    // Reflection  
    'Class', 'Method', 'Field', 'Constructor',,
    // Socket
    'WebSocket', 'WebSocketListener',
    // Log
    'Log']
};

export const JavascriptKeyword = {
  DataTypes: ["number", "string", "boolean", "null", "undefined", "bigint", "symbol", "object"],
  ControlFlow: ["if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return"],
  FunctionKeywords: ["function", "return", "arguments", "async", "await"],
  ClassAndObjectManagement: ["class", "extends", "super", "new", "this", "constructor", "static", "prototype"],
  VariableDeclarations: ["var", "let", "const"],
  ErrorHandling: ["try", "catch", "finally", "throw"],
  OtherKeywords: ["export", "import", "default", "yield", "typeof", "instanceof", "void", "delete", "in", "with"],
  DOMManipulation: ["document", "window", "Element", "Node", "Event", "EventListener", "querySelector", "getElementById", "appendChild", "removeChild"],
  AsynchronousOperations: ["Promise", "setTimeout", "setInterval", "fetch", "async", "await", "then", "catch", "finally"],
  JSONHandling: ["JSON", "parse", "stringify"],
  ES6Features: ["let", "const", "arrow functions", "template literals", "destructuring", "spread operator", "rest parameters", "modules", "promises", "classes"],
  WebAPIs: ["localStorage", "sessionStorage", "indexedDB", "fetch", "XMLHttpRequest", "FormData", "URL", "Blob", "FileReader"],
  FrameworksAndLibraries: ["React", "Vue", "Angular", "jQuery", "Express", "Node.js", "Redux", "Svelte", "Next.js", "Nuxt.js"],
  Testing: ["Jest", "Mocha", "Chai", "Cypress", "Enzyme", "Jasmine"],
  BuildTools: ["Webpack", "Babel", "Parcel", "Rollup", "Gulp", "Grunt"],
  NodeJS: ["require", "module", "exports", "process", "Buffer", "Stream", "EventEmitter", "fs", "path", "http", "https"],
  ReactKeywords: ["useState", "useEffect", "useContext", "useReducer", "useRef", "useMemo", "useCallback", "Component", "Props", "State", "Context", "Hooks"],
  VueKeywords: ["ref", "reactive", "computed", "watch", "watchEffect", "v-if", "v-for", "v-bind", "v-on", "v-model", "component", "mixin", "directive"],
  AngularKeywords: ["NgModule", "Component", "Directive", "Pipe", "Service", "Injectable", "Input", "Output", "ViewChild", "ViewChildren", "ngOnInit", "ngOnDestroy", "ngOnChanges"],
  TypeScriptKeywords: ["interface", "type", "enum", "namespace", "decorator", "generic", "readonly", "keyof", "typeof", "as", "any", "unknown", "never", "void"],
  UtilityLibraries: ["Lodash", "Underscore", "Moment", "Day.js", "Axios", "Ramda"],
  WellknownRefTypes: [
    // Collections
    'Array', 'Map', 'Set', 'WeakMap', 'WeakSet',
    // Regular Expressions
    'RegExp',
    // Date and Time
    'Date',
    // Math & Number Handling
    'Math', 'Number', 'BigInt',
    // I/O Streams
    'Blob', 'File', 'FileReader', 'FileList',
    // Networking
    'URL', 'URLSearchParams', 'Headers', 'Request', 'Response', 'Fetch',
    // Reflection
    'Proxy', 'Reflect',
    // Logging
    'console'
  ]
}

export const TypescriptKeyword = {
        DataTypes: ["number", "string", "boolean", "null", "undefined", "bigint", "symbol", "object", "any", "unknown", "never", "void"],
        ControlFlow: ["if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return"],
        FunctionKeywords: ["function", "return", "arguments", "async", "await"],
        ClassAndObjectManagement: ["class", "extends", "super", "new", "this", "constructor", "static", "prototype", "abstract", "implements", "interface"],
        VariableDeclarations: ["var", "let", "const"],
        ErrorHandling: ["try", "catch", "finally", "throw"],
        OtherKeywords: ["export", "import", "default", "yield", "typeof", "instanceof", "void", "delete", "in", "with", "as", "is", "keyof", "readonly", "namespace", "module"],
        DOMManipulation: ["document", "window", "Element", "Node", "Event", "EventListener", "querySelector", "getElementById", "appendChild", "removeChild"],
        AsynchronousOperations: ["Promise", "setTimeout", "setInterval", "fetch", "async", "await", "then", "catch", "finally"],
        JSONHandling: ["JSON", "parse", "stringify"],
        ES6Features: ["let", "const", "arrow functions", "template literals", "destructuring", "spread operator", "rest parameters", "modules", "promises", "classes"],
        WebAPIs: ["localStorage", "sessionStorage", "indexedDB", "fetch", "XMLHttpRequest", "FormData", "URL", "Blob", "FileReader"],
        FrameworksAndLibraries: ["React", "Vue", "Angular", "jQuery", "Express", "Node.js", "Redux", "Svelte", "Next.js", "Nuxt.js"],
        Testing: ["Jest", "Mocha", "Chai", "Cypress", "Enzyme", "Jasmine"],
        BuildTools: ["Webpack", "Babel", "Parcel", "Rollup", "Gulp", "Grunt"],
        NodeJS: ["require", "module", "exports", "process", "Buffer", "Stream", "EventEmitter", "fs", "path", "http", "https"],
        ReactKeywords: ["useState", "useEffect", "useContext", "useReducer", "useRef", "useMemo", "useCallback", "Component", "Props", "State", "Context", "Hooks"],
        VueKeywords: ["ref", "reactive", "computed", "watch", "watchEffect", "v-if", "v-for", "v-bind", "v-on", "v-model", "component", "mixin", "directive"],
        AngularKeywords: ["NgModule", "Component", "Directive", "Pipe", "Service", "Injectable", "Input", "Output", "ViewChild", "ViewChildren", "ngOnInit", "ngOnDestroy", "ngOnChanges"],
        TypeScriptKeywords: ["interface", "type", "enum", "namespace", "decorator", "generic", "readonly", "keyof", "typeof", "as", "any", "unknown", "never", "void", "union", "intersection", "tuple", "literal", "type guard", "type assertion", "conditional types", "mapped types", "utility types"],
        UtilityLibraries: ["Lodash", "Underscore", "Moment", "Day.js", "Axios", "Ramda"],
        WellknownRefTypes: [
          // Collections
          'Array', 'Map', 'Set', 'WeakMap', 'WeakSet',
          // Regular Expressions
          'RegExp',
          // Date and Time
          'Date',
          // Math & Number Handling
          'Math', 'Number', 'BigInt',
          // I/O Streams
          'Blob', 'File', 'FileReader', 'FileList',
          // Networking
          'URL', 'URLSearchParams', 'Headers', 'Request', 'Response', 'Fetch',
          // Reflection
          'Proxy', 'Reflect',
          // Logging
          'console',
          // TypeScript Specific
          'Partial', 'Required', 'Readonly', 'Record', 'Pick', 'Omit', 'Exclude', 'Extract', 'NonNullable', 'ReturnType', 'InstanceType'
        ]
      
}

export const AngularKeywords = {
        DataTypes: ["number", "string", "boolean", "null", "undefined", "bigint", "symbol", "object", "any", "unknown", "never", "void"],
        ControlFlow: ["if", "else", "switch", "case", "default", "for", "while", "do", "break", "continue", "return"],
        FunctionKeywords: ["function", "return", "arguments", "async", "await"],
        ClassAndObjectManagement: ["class", "extends", "super", "new", "this", "constructor", "static", "prototype", "abstract", "implements", "interface"],
        VariableDeclarations: ["var", "let", "const"],
        ErrorHandling: ["try", "catch", "finally", "throw"],
        OtherKeywords: ["export", "import", "default", "yield", "typeof", "instanceof", "void", "delete", "in", "with", "as", "is", "keyof", "readonly", "namespace", "module"],
        AngularCore: [
          // Angular Core Decorators
          "NgModule", "Component", "Directive", "Pipe", "Injectable", "Input", "Output", "ViewChild", "ViewChildren", "ContentChild", "ContentChildren", "HostBinding", "HostListener",
          // Angular Core Classes
          "ElementRef", "Renderer2", "TemplateRef", "ViewContainerRef", "ChangeDetectorRef", "ApplicationRef", "Injector", "NgModuleRef", "ComponentFactoryResolver", "ComponentRef", "ViewRef"
        ],
        AngularLifecycleHooks: [
          "ngOnInit", "ngOnChanges", "ngDoCheck", "ngAfterContentInit", "ngAfterContentChecked", "ngAfterViewInit", "ngAfterViewChecked", "ngOnDestroy"
        ],
        AngularForms: [
          "FormControl", "FormGroup", "FormArray", "AbstractControl", "Validators", "FormBuilder", "ReactiveFormsModule", "FormsModule", "FormControlDirective", "FormGroupDirective", "NgForm", "NgModel"
        ],
        AngularRouting: [
          "RouterModule", "Routes", "Router", "ActivatedRoute", "RouterOutlet", "RouterLink", "RouterLinkActive", "CanActivate", "CanDeactivate", "Resolve", "CanLoad", "NavigationExtras", "UrlSegment", "ParamMap", "QueryParamsHandling"
        ],
        AngularHttpClient: [
          "HttpClient", "HttpClientModule", "HttpHeaders", "HttpParams", "HttpErrorResponse", "HttpInterceptor", "HttpRequest", "HttpEvent", "HttpHandler", "HttpBackend"
        ],
        AngularDependencyInjection: [
          "Injectable", "Inject", "InjectionToken", "Provider", "useClass", "useValue", "useFactory", "useExisting", "forwardRef"
        ],
        AngularChangeDetection: [
          "ChangeDetectionStrategy", "ChangeDetectorRef", "markForCheck", "detectChanges", "detach", "reattach"
        ],
        AngularAnimations: [
          "trigger", "state", "style", "animate", "transition", "keyframes", "query", "stagger", "group", "sequence", "AnimationBuilder", "AnimationPlayer"
        ],
        AngularTesting: [
          "TestBed", "ComponentFixture", "async", "fakeAsync", "tick", "inject", "ComponentFixtureAutoDetect", "ComponentFixtureNoNgZone", "By", "DebugElement", "DebugNode", "MockBuilder", "MockRender"
        ],
        AngularPipes: [
          "DatePipe", "UpperCasePipe", "LowerCasePipe", "CurrencyPipe", "DecimalPipe", "PercentPipe", "JsonPipe", "SlicePipe", "AsyncPipe", "I18nPluralPipe", "I18nSelectPipe", "KeyValuePipe"
        ],
        AngularDirectives: [
          "NgIf", "NgFor", "NgSwitch", "NgSwitchCase", "NgSwitchDefault", "NgClass", "NgStyle", "NgModel", "NgTemplateOutlet", "NgComponentOutlet", "NgPlural", "NgPluralCase"
        ],
        AngularMaterial: [
          "MatButtonModule", "MatInputModule", "MatCardModule", "MatToolbarModule", "MatIconModule", "MatMenuModule", "MatTableModule", "MatPaginatorModule", "MatSortModule", "MatDialogModule", "MatSnackBarModule", "MatProgressSpinnerModule", "MatSelectModule", "MatCheckboxModule", "MatRadioModule", "MatDatepickerModule", "MatNativeDateModule", "MatTabsModule", "MatStepperModule", "MatExpansionModule", "MatListModule", "MatSidenavModule", "MatTooltipModule", "MatAutocompleteModule", "MatChipsModule", "MatProgressBarModule", "MatSliderModule", "MatSlideToggleModule", "MatButtonToggleModule", "MatBadgeModule", "MatBottomSheetModule", "MatDividerModule", "MatGridListModule", "MatRippleModule", "MatTreeModule"
        ],
        AngularRxJS: [
          "Observable", "Subject", "BehaviorSubject", "ReplaySubject", "AsyncSubject", "of", "from", "map", "filter", "switchMap", "mergeMap", "concatMap", "exhaustMap", "take", "takeUntil", "debounceTime", "distinctUntilChanged", "catchError", "retry", "tap", "combineLatest", "forkJoin", "withLatestFrom", "startWith", "delay", "throttleTime", "auditTime", "interval", "timer"
        ],
        AngularCLI: [
          "ng generate", "ng serve", "ng build", "ng test", "ng lint", "ng e2e", "ng add", "ng update", "ng deploy", "ng config", "ng new", "ng run", "ng doc", "ng xi18n"
        ],
        AngularUniversal: [
          "renderModule", "renderModuleFactory", "TransferState", "PlatformState", "ServerModule", "ServerTransferStateModule", "ngExpressEngine", "provideModuleMap"
        ],
        AngularSchematics: [
          "Schematic", "Rule", "Tree", "chain", "externalSchematic", "mergeWith", "apply", "url", "template", "move", "filter", "noop", "branchAndMerge", "mergeStrategy"
        ],
        AngularSecurity: [
          "DomSanitizer", "SafeHtml", "SafeResourceUrl", "SafeScript", "SafeStyle", "SafeUrl", "SecurityContext"
        ],
        AngularInternationalization: [
          "TranslateModule", "TranslateService", "TranslateLoader", "TranslatePipe", "TranslateCompiler", "TranslateParser", "MissingTranslationHandler", "TranslateStore", "TranslateDirective", "TranslateFakeLoader", "TranslateHttpLoader"
        ],
        AngularStateManagement: [
          "NgRx", "Store", "Action", "Reducer", "Selector", "Effect", "State", "createAction", "createReducer", "createEffect", "createSelector", "StoreModule", "EffectsModule", "Entity", "Data", "RouterStoreModule", "StoreDevtoolsModule"
        ],
        AngularPerformance: [
          "OnPush", "trackBy", "pure pipes", "lazy loading", "preloadingStrategy", "enableProdMode", "ngZone", "runOutsideAngular", "unidirectional data flow", "AOT compilation", "tree shaking", "code splitting"
        ],
        AngularMiscellaneous: [
          "APP_INITIALIZER", "APP_BOOTSTRAP_LISTENER", "PLATFORM_INITIALIZER", "ENVIRONMENT_INITIALIZER", "LOCALE_ID", "DEFAULT_CURRENCY_CODE", "DOCUMENT", "EVENT_MANAGER_PLUGINS", "HASH_LOCATION_STRATEGY", "PATH_LOCATION_STRATEGY", "APP_ID", "PLATFORM_ID", "VERSION", "isDevMode", "createPlatform", "createPlatformFactory", "destroyPlatform"
        ]
 }

 export const cSharpKeywords = {
        DataTypes: ["bool", "byte", "sbyte", "char", "decimal", "double", "float", "int", "uint", "long", "ulong", "short", "ushort", "object", "string", "dynamic"],
        ControlFlow: ["if", "else", "switch", "case", "default", "for", "foreach", "while", "do", "break", "continue", "return", "goto"],
        ClassAndObjectManagement: ["class", "struct", "interface", "enum", "new", "this", "base", "abstract", "sealed", "static", "virtual", "override", "partial", "namespace", "using"],
        AccessModifiers: ["public", "private", "protected", "internal", "protected internal", "private protected"],
        ExceptionHandling: ["try", "catch", "finally", "throw"],
        OtherKeywords: ["void", "async", "await", "yield", "typeof", "nameof", "sizeof", "checked", "unchecked", "fixed", "lock", "stackalloc", "params", "ref", "out", "in", "is", "as", "operator", "event", "delegate", "unsafe", "volatile", "extern", "const", "readonly", "implicit", "explicit", "global"],
        Collections: ["List", "Dictionary", "HashSet", "Queue", "Stack", "LinkedList", "SortedList", "SortedDictionary", "SortedSet", "Array", "ArrayList", "Hashtable", "BitArray", "Collection", "ReadOnlyCollection", "ObservableCollection", "ConcurrentBag", "ConcurrentQueue", "ConcurrentStack", "ConcurrentDictionary", "BlockingCollection"],
        LINQ: ["from", "where", "select", "group", "orderby", "join", "let", "into", "ascending", "descending", "Any", "All", "First", "FirstOrDefault", "Single", "SingleOrDefault", "Last", "LastOrDefault", "Count", "Sum", "Min", "Max", "Average", "Aggregate", "Distinct", "Skip", "Take", "TakeWhile", "SkipWhile", "SelectMany", "GroupBy", "OrderBy", "OrderByDescending", "ThenBy", "ThenByDescending", "Join", "GroupJoin", "ToArray", "ToList", "ToDictionary", "ToLookup", "AsEnumerable", "AsQueryable", "Cast", "OfType"],
        FileIO: ["File", "FileInfo", "Directory", "DirectoryInfo", "Path", "Stream", "FileStream", "StreamReader", "StreamWriter", "BinaryReader", "BinaryWriter", "MemoryStream", "BufferedStream", "FileMode", "FileAccess", "FileShare", "FileAttributes", "DriveInfo", "FileSystemWatcher"],
        Networking: ["HttpClient", "WebRequest", "WebResponse", "HttpWebRequest", "HttpWebResponse", "TcpClient", "TcpListener", "UdpClient", "Socket", "NetworkStream", "IPAddress", "IPEndPoint", "Dns", "WebSocket", "HttpListener", "HttpContent", "HttpMethod", "HttpStatusCode"],
        Threading: ["Thread", "ThreadPool", "Task", "Task<TResult>", "Parallel", "CancellationToken", "CancellationTokenSource", "Semaphore", "SemaphoreSlim", "Mutex", "Monitor", "AutoResetEvent", "ManualResetEvent", "ReaderWriterLock", "ReaderWriterLockSlim", "Interlocked", "Volatile", "Barrier", "CountdownEvent", "SpinLock", "SpinWait", "AsyncLocal", "ExecutionContext", "SynchronizationContext"],
        Reflection: ["Type", "Assembly", "MethodInfo", "PropertyInfo", "FieldInfo", "ConstructorInfo", "ParameterInfo", "EventInfo", "MemberInfo", "Activator", "CustomAttribute", "CustomAttributeData", "CustomAttributeNamedArgument", "CustomAttributeTypedArgument", "Binder", "BindingFlags", "Module", "AppDomain"],
        Serialization: ["JsonSerializer", "XmlSerializer", "DataContractSerializer", "DataContractJsonSerializer", "BinaryFormatter", "SoapFormatter", "JsonConvert", "JsonReader", "JsonWriter", "JsonTextReader", "JsonTextWriter", "XmlReader", "XmlWriter", "XmlTextReader", "XmlTextWriter", "XmlDocument", "XDocument", "XElement", "XAttribute", "XPathNavigator", "XPathExpression"],
        EntityFramework: ["DbContext", "DbSet", "EntityState", "Migration", "DbMigration", "DbModelBuilder", "DbConfiguration", "DbFunctions", "DbSqlQuery", "DbRawSqlQuery", "DbQuery", "DbContextOptions", "DbConnection", "DbCommand", "DbDataReader", "DbParameter", "DbTransaction", "DbProviderFactory", "DbProviderServices", "DbProviderManifest", "DbProviderManifestToken"],
        ASPNETCore: ["Startup", "ConfigureServices", "Configure", "IApplicationBuilder", "IServiceCollection", "IHostBuilder", "IHost", "IWebHostBuilder", "IWebHost", "Middleware", "Controller", "ApiController", "Route", "HttpGet", "HttpPost", "HttpPut", "HttpDelete", "HttpPatch", "FromQuery", "FromRoute", "FromBody", "FromForm", "FromHeader", "FromServices", "ActionResult", "IActionResult", "ViewResult", "JsonResult", "ContentResult", "FileResult", "RedirectResult", "StatusCodeResult", "BadRequestResult", "NotFoundResult", "OkResult", "CreatedResult", "AcceptedResult", "NoContentResult", "UnauthorizedResult", "ForbidResult", "ChallengeResult", "SignInResult", "SignOutResult", "LocalRedirectResult", "PhysicalFileResult", "VirtualFileResult", "ViewComponent", "TagHelper", "RazorPage", "RazorView", "RazorViewEngine", "RazorRuntimeCompilation", "RazorCompiledItem", "RazorCompiledItemMetadata", "RazorCompiledItemMetadataAttribute", "RazorCompiledItemMetadataAttributeExtensions", "RazorCompiledItemMetadataExtensions", "RazorCompiledItemExtensions"],
        StateManagement: ["NgRx", "Store", "Action", "Reducer", "Selector", "Effect", "State", "createAction", "createReducer", "createEffect", "createSelector", "StoreModule", "EffectsModule", "Entity", "Data", "RouterStoreModule", "StoreDevtoolsModule"],
        Performance: ["OnPush", "trackBy", "pure pipes", "lazy loading", "preloadingStrategy", "enableProdMode", "ngZone", "runOutsideAngular", "unidirectional data flow", "AOT compilation", "tree shaking", "code splitting"],
        Miscellaneous: ["APP_INITIALIZER", "APP_BOOTSTRAP_LISTENER", "PLATFORM_INITIALIZER", "ENVIRONMENT_INITIALIZER", "LOCALE_ID", "DEFAULT_CURRENCY_CODE", "DOCUMENT", "EVENT_MANAGER_PLUGINS", "HASH_LOCATION_STRATEGY", "PATH_LOCATION_STRATEGY", "APP_ID", "PLATFORM_ID", "VERSION", "isDevMode", "createPlatform", "createPlatformFactory", "destroyPlatform"],
        WPF : [ "Window", "Application", "Page", "Frame", "UserControl", "DataTemplate", "ControlTemplate", "Style", "Trigger", "EventTrigger", "DataTrigger", "Binding", "RelativeSource", "TemplateBinding", "StaticResource", "DynamicResource", "ResourceDictionary", "DependencyObject", "DependencyProperty", "RoutedEvent", "RoutedEventArgs", "RoutedEventHandler", "Command", "ICommand", "DelegateCommand", "RelayCommand", "INotifyPropertyChanged", "ObservableCollection", "CollectionView", "CollectionViewSource", "DataContext", "ItemsControl", "ContentControl", "HeaderedContentControl", "ItemsPresenter", "ContentPresenter", "Panel", "StackPanel", "Grid", "Canvas", "DockPanel", "WrapPanel", "UniformGrid", "Border", "Button", "Label", "TextBox", "ComboBox", "ListBox", "ListView", "TreeView", "DataGrid", "Menu", "ToolBar", "StatusBar", "Slider", "ProgressBar", "CheckBox", "RadioButton", "Image", "MediaElement", "WebBrowser", "Expander", "GroupBox", "TabControl", "TabItem", "ScrollViewer", "Separator", "ToolTip", "ContextMenu", "Popup", "Adorner", "AdornerLayer", "Visual", "VisualBrush", "DrawingBrush", "DrawingGroup", "DrawingImage", "DrawingVisual", "Geometry", "Path", "Ellipse", "Rectangle", "Line", "Polygon", "Polyline", "PathFigure", "PathSegment", "ArcSegment", "BezierSegment", "LineSegment", "PolyBezierSegment", "PolyLineSegment", "PolyQuadraticBezierSegment", "QuadraticBezierSegment", "Transform", "TranslateTransform", "RotateTransform", "ScaleTransform", "SkewTransform", "TransformGroup", "MatrixTransform", "Brush", "SolidColorBrush", "LinearGradientBrush", "RadialGradientBrush", "ImageBrush", "VisualBrush", "DrawingBrush", "TileBrush", "GradientStop", "Color", "Colors", "Point", "Rect", "Size", "Thickness", "CornerRadius", "Duration", "KeyTime", "RepeatBehavior", "Timeline", "DoubleAnimation", "ColorAnimation", "PointAnimation", "ThicknessAnimation", "Storyboard", "EventTrigger", "BeginStoryboard", "StopStoryboard", "PauseStoryboard", "ResumeStoryboard", "RemoveStoryboard", "SeekStoryboard", "SetStoryboardSpeedRatio", "SkipStoryboardToFill", "ParallelTimeline", "TimelineGroup", "AnimationClock", "Clock", "ClockController", "ClockGroup", "ClockState", "TimeManager"],
        WinForms: ["Form", "Button", "Label", "TextBox", "ComboBox", "ListBox", "CheckBox", "RadioButton", "PictureBox", "Panel", "GroupBox", "TabControl", "TabPage", "MenuStrip", "ToolStrip", "StatusStrip", "ContextMenuStrip", "DataGridView", "ListView", "TreeView", "Timer", "OpenFileDialog", "SaveFileDialog", "FolderBrowserDialog", "ColorDialog", "FontDialog", "MessageBox", "Application", "Control", "EventHandler", "PaintEventArgs", "Graphics", "Bitmap", "Icon", "Cursor", "Point", "Size", "Rectangle", "Color", "Font", "DialogResult", "Anchor", "Dock", "Padding", "Margin", "AutoSize", "Visible", "Enabled", "Text", "BackColor", "ForeColor", "Font", "Location", "Size", "StartPosition", "WindowState", "FormBorderStyle", "Show", "ShowDialog", "Close", "Dispose", "Invalidate", "Refresh", "Update", "BringToFront", "SendToBack", "Focus", "Select", "PerformClick", "OnClick", "OnPaint", "OnResize", "OnLoad", "OnClosed", "OnFormClosing", "OnFormClosed"],
 }

 export const AspNetClassicKeywords = {
    ASPNETClassic: [
      "Page", "Control", "UserControl", "MasterPage", "ViewState", "Session", "Application", "Cache", "Request", "Response", "Server", "HttpContext", "HttpApplication", "HttpModule", "HttpHandler", "Web.config", "Global.asax", "GridView", "DataGrid", "Repeater", "DataList", "FormView", "DetailsView", "Login", "LoginView", "LoginStatus", "LoginName", "PasswordRecovery", "ChangePassword", "CreateUserWizard", "SiteMap", "SiteMapPath", "Menu", "TreeView", "Web.sitemap", "RoleManager", "Membership", "Profile", "WebPart", "WebPartManager", "WebPartZone", "CatalogZone", "EditorZone", "ConnectionsZone", "ScriptManager", "UpdatePanel", "Timer", "UpdateProgress", "WebService", "ASMX", "WSDL", "SOAP", "XML", "XSLT", "XPath", "XSL", "DataSet", "DataTable", "DataRow", "DataColumn", "DataRelation", "SqlDataSource", "ObjectDataSource", "XmlDataSource", "LinqDataSource", "EntityDataSource", "AccessDataSource", "SiteMapDataSource", "SqlConnection", "SqlCommand", "SqlDataReader", "SqlDataAdapter", "SqlParameter", "SqlTransaction", "SqlBulkCopy", "SqlDependency", "SqlCacheDependency", "OutputCache", "CacheDependency"
    ],
    ASPNETClassicClasses: [
      "Page", "Control", "UserControl", "MasterPage", "ViewState", "HttpContext", "HttpRequest", "HttpResponse",
      "HttpSessionState", "Application", "HttpServerUtility", "DataBinder", "LiteralControl", "EventArgs", "WebControl",
      "Panel", "PlaceHolder", "WebPart", "WebPartManager", "WebPartZone", "XmlDataSource", "ObjectDataSource"
    ],
    
    ASPX: [
      "<asp:Button>", "<asp:Label>", "<asp:TextBox>", "<asp:DropDownList>", "<asp:CheckBox>", "<asp:RadioButton>",
      "<asp:GridView>", "<asp:DataList>", "<asp:Repeater>", "<asp:FormView>", "<asp:ListView>",
      "<asp:ObjectDataSource>", "<asp:SqlDataSource>", "<asp:ValidationSummary>", "<asp:RequiredFieldValidator>",
      "<asp:RegularExpressionValidator>", "<asp:CompareValidator>", "<asp:CustomValidator>", "<asp:Login>",
      "<asp:CreateUserWizard>", "<asp:ChangePassword>", "<asp:Menu>", "<asp:SiteMapPath>", "<asp:TreeView>",
      "<asp:UpdatePanel>", "<asp:ScriptManager>", "<asp:ContentPlaceHolder>", "<asp:Literal>", "<asp:Wizard>", "<asp:MultiView>", "<asp:View>", "<asp:Substitution>"
    ]}

export const AspNetMvcKeywords = {
        ASPNETMVC: [
          // Core MVC Components
          "Controller", "View", "Model", "ActionResult", "ViewResult", "JsonResult", "ContentResult", "FileResult", "RedirectResult", "PartialViewResult", "HttpStatusCodeResult",
          
          // Routing
          "Route", "RouteConfig", "RoutePrefix", "RouteAttribute", "AreaRegistration", "RouteCollection", "RouteData", "UrlParameter", "RouteTable", "RouteValueDictionary",
          
          // Helpers
          "HtmlHelper", "UrlHelper", "AjaxHelper", "Html.BeginForm", "Html.EndForm", "Html.TextBox", "Html.TextBoxFor", "Html.DropDownList", "Html.DropDownListFor", "Html.CheckBox", "Html.CheckBoxFor", "Html.RadioButton", "Html.RadioButtonFor", "Html.Label", "Html.LabelFor", "Html.ValidationMessage", "Html.ValidationSummary", "Html.ActionLink", "Html.RenderPartial", "Html.RenderAction", "Html.Partial", "Html.Action", "Html.Encode", "Html.Raw",
          
          // Data Handling
          "TempData", "ViewBag", "ViewData", "ModelState", "ModelBinding", "ModelMetadata", "ModelValidator", "ModelValidatorProvider",
          
          // Validation
          "ValidationSummary", "ValidationMessage", "ValidateInput", "DataAnnotations", "Required", "StringLength", "Range", "RegularExpression", "Compare", "Remote", "CustomValidation", "ValidationAttribute", "ValidationContext", "ValidationResult",
          
          // Filters
          "ActionFilter", "AuthorizationFilter", "ExceptionFilter", "ResultFilter", "GlobalFilters", "FilterConfig", "AuthorizeAttribute", "AllowAnonymous", "HandleError", "OutputCache", "ChildActionOnly", "NonAction", "ActionName",
          
          // Forms and Anti-Forgery
          "BeginForm", "BeginRouteForm", "AntiForgeryToken", "ValidateAntiForgeryToken", "FormCollection", "FormMethod", "FormMethod.Post", "FormMethod.Get",
          
          // Razor and Views
          "Razor", "RazorViewEngine", "WebViewPage", "Layout", "_ViewStart", "_ViewImports", "PartialView", "RenderPartial", "RenderAction", "Html.RenderPartial", "Html.RenderAction", "Html.Partial", "Html.Action", "Url.Action", "Url.Content", "Url.RouteUrl", "Ajax.BeginForm", "Ajax.ActionLink", "AjaxOptions", "AjaxHelper", "UnobtrusiveAjax", "UnobtrusiveValidation", "ClientValidationEnabled", "UnobtrusiveJavaScriptEnabled",
          
          // Bundling and Minification
          "BundleConfig", "Bundle", "ScriptBundle", "StyleBundle", "Minify", "Minifier", "WebGrease",
          
          // Areas and Scaffolding
          "Areas", "AreaRegistration", "Scaffolding", "T4", "Templates", "CodeTemplates",
          
          // Core MVC Classes
          "ControllerBase", "ControllerContext", "MvcHandler", "MvcRouteHandler", "HttpContext", "HttpContextBase", "HttpRequestBase", "HttpResponseBase", "HttpSessionStateBase", "HttpFileCollectionBase",
          
          // Model Binding and Metadata
          "ModelBinder", "DefaultModelBinder", "IModelBinder", "ModelMetadata", "ModelMetadataProvider", "ModelValidator", "ModelValidatorProvider",
          
          // Dependency Injection
          "DependencyResolver", "IDependencyResolver", "ControllerFactory", "DefaultControllerFactory", "IControllerFactory",
          
          // Miscellaneous
          "MvcContrib", "MvcMailer", "MvcSiteMapProvider", "MvcPager", "MvcTurbine", "MvcContrib.FluentHtml", "MvcContrib.UI.Grid", "MvcContrib.UI.Pager", "MvcContrib.UI.Menu", "MvcContrib.UI.Tabs", "MvcContrib.UI.Accordion", "MvcContrib.UI.DataList", "MvcContrib.UI.Repeater"
        ]
      };
    
export const AspNetMvcCore = {
        CoreClasses: [
          "IActionResult", "ControllerBase", "ViewComponent", "TagHelper", "Middleware", "IFormFile", "IHostingEnvironment",
          "IConfiguration", "IServiceCollection", "IApplicationBuilder", "IWebHost", "WebHostBuilder", "EndpointRoutingMiddleware",
          "ActionDescriptor", "PageModel", "RazorPage", "ViewDataDictionary", "HtmlHelper", "JsonHelper", "LoggerFactory",
          "HttpContext", "HttpRequest", "HttpResponse", "HttpClient", "ClaimsPrincipal", "ClaimsIdentity", "UserManager",
          "SignInManager", "RoleManager", "IdentityUser", "IdentityRole", "EntityFrameworkCore.DbContext", "DbSet", "IQueryable",
          "ILogger", "ILoggerFactory", "IOptions", "IOptionsMonitor", "IOptionsSnapshot", "IConfigurationRoot", "ConfigurationBuilder",
          "AuthorizationHandler", "AuthorizationRequirement", "AuthenticationSchemeOptions", "JwtSecurityTokenHandler",
          "EndpointDataSource", "RouteData", "ModelStateDictionary", "ObjectResult", "FileResult", "JsonResult", "ContentResult",
          "RedirectResult", "ViewResult", "NotFoundResult", "UnauthorizedResult", "ForbidResult", "SignInResult", "ChallengeResult",
          "ActionExecutingContext", "ActionExecutedContext", "ExceptionContext", "ResourceExecutingContext", "ResourceExecutedContext",
          "HttpContextAccessor", "RequestDelegate", "IActionFilter", "IResultFilter", "IAuthorizationFilter", "IExceptionFilter",
          "IResourceFilter", "IAsyncActionFilter", "IAsyncResultFilter", "IAsyncAuthorizationFilter", "IAsyncExceptionFilter",
          "IAsyncResourceFilter"
        ],
        MarkupTags: [
          "partial", "renderbody", "rendersection", "inject", "model", "inherits", "using", "namespace", "addTagHelper",
          "removeTagHelper", "tagHelperPrefix", "environment", "if", "for", "foreach", "switch", "case", "functions", "code",
          "await", "html", "head", "body", "title", "meta", "link", "script", "style", "form", "input", "select", "textarea",
          "button", "label", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "a", "div", "span", "ul", "ol", "li", "section",
          "article", "aside", "header", "footer", "nav", "main"
        ],
        RazorHelpers: [
          "Html.Partial", "Html.RenderPartial", "Html.Action", "Html.RenderAction", "Html.BeginForm", "Html.EndForm",
          "Html.TextBox", "Html.TextArea", "Html.Password", "Html.Hidden", "Html.DropDownList", "Html.ListBox",
          "Html.CheckBox", "Html.RadioButton", "Html.Label", "Html.DisplayFor", "Html.EditorFor", "Html.ValidationMessageFor",
          "Html.AntiForgeryToken"
        ]
      };
      
  