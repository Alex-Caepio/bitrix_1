{"version":3,"sources":["hardware.js"],"names":["lsKey","defaultMicrophone","defaultCamera","defaultSpeaker","enableMicAutoParameters","preferHd","enableMirroring","Events","initialized","deviceChanged","onChangeMirroringVideo","HardwareManager","this","_currentDeviceList","updating","Object","defineProperty","get","_getDeviceMap","bind","microphoneId","localStorage","getItem","microphoneList","set","setItem","cameraId","cameraList","speakerId","audioOutputList","preferHdQuality","eventEmitter","emit","BX","desktop","onCustomEvent","Event","EventEmitter","prototype","init","Promise","resolve","reject","enumerateDevices","then","deviceList","filterDeviceList","navigator","mediaDevices","addEventListener","debounce","onNavigatorDeviceChanged","catch","devices","hasCamera","Error","keys","length","getMicrophoneList","values","filter","deviceInfo","kind","getCameraList","getSpeakerList","canSelectSpeaker","HTMLMediaElement","updateDeviceList","e","removedDevices","addedDevices","shouldSkipDeviceChangedEvent","every","deviceId","label","forEach","index","findIndex","dev","splice","push","added","removed","browserDeviceList","device","subscribe","eventName","listener","unsubscribe","deviceKind","result","i","BackgroundDialog","isAvailable","getClass","getApiVersion","Messenger","Lib","Utils","platform","getDesktopVersion","open","window","Helper","show","html","js","opener","top","createWindow","delegate","controller","SetProperty","message","Width","Height","ExecuteCommand","BXIM","getHtmlPage","Call","Hardware"],"mappings":"CAAC,WAEA,IAAIA,EAAQ,CACXC,kBAAmB,oCACnBC,cAAe,gCACfC,eAAgB,iCAChBC,wBAAyB,4CACzBC,SAAU,kCACVC,gBAAiB,0CAGlB,IAAIC,EAAS,CACZC,YAAa,cACbC,cAAe,eACfC,uBAAwB,0BAGzB,IAAIC,EAAkB,WAErBC,KAAKJ,YAAc,MACnBI,KAAKC,mBAAqB,GAC1BD,KAAKE,SAAW,MAEhBC,OAAOC,eAAeJ,KAAM,aAAc,CAACK,IAAKL,KAAKM,cAAcC,KAAKP,KAAM,gBAC9EG,OAAOC,eAAeJ,KAAM,iBAAkB,CAACK,IAAK,WAAW,OAAOL,KAAKM,cAAc,iBACzFH,OAAOC,eAAeJ,KAAM,kBAAmB,CAACK,IAAK,WAAW,OAAOL,KAAKM,cAAc,kBAE1FH,OAAOC,eAAeJ,KAAM,oBAAqB,CAChDK,IAAK,WACJ,IAAIG,EAAeC,aAAeA,aAAaC,QAAQtB,EAAMC,mBAAqB,GAClF,OAAOW,KAAKW,eAAeH,GAAgBA,EAAe,IAE3DI,IAAK,SAASJ,GACb,GAAIC,aACJ,CACCA,aAAaI,QAAQzB,EAAMC,kBAAmBmB,OAIjDL,OAAOC,eAAeJ,KAAM,gBAAiB,CAC5CK,IAAK,WACJ,IAAIS,EAAWL,aAAeA,aAAaC,QAAQtB,EAAME,eAAiB,GAC1E,OAAOU,KAAKe,WAAWD,GAAYA,EAAW,IAE/CF,IAAK,SAASE,GACb,GAAIL,aACJ,CACCA,aAAaI,QAAQzB,EAAME,cAAewB,OAI7CX,OAAOC,eAAeJ,KAAM,iBAAkB,CAC7CK,IAAK,WACJ,IAAIW,EAAYP,aAAeA,aAAaC,QAAQtB,EAAMG,gBAAkB,GAC5E,OAAOS,KAAKiB,gBAAgBD,GAAaA,EAAY,IAEtDJ,IAAK,SAASI,GACb,GAAIP,aACJ,CACCA,aAAaI,QAAQzB,EAAMG,eAAgByB,OAK9Cb,OAAOC,eAAeJ,KAAK,0BAA2B,CACrDK,IAAK,WACJ,OAAOI,aAAgBA,aAAaC,QAAQtB,EAAMI,2BAA6B,IAAO,MAEvFoB,IAAK,SAASpB,GACb,GAAIiB,aACJ,CACCA,aAAaI,QAAQzB,EAAMI,wBAAyBA,EAA0B,IAAM,SAIvFW,OAAOC,eAAeJ,KAAM,kBAAmB,CAC9CK,IAAK,WACJ,OAAOI,aAAgBA,aAAaC,QAAQtB,EAAMK,YAAc,IAAO,MAExEmB,IAAK,SAASM,GACb,GAAIT,aACJ,CACCA,aAAaI,QAAQzB,EAAMK,SAAUyB,EAAkB,IAAM,SAIhEf,OAAOC,eAAeJ,KAAM,kBAAmB,CAC9CK,IAAK,WACJ,OAAOI,aAAgBA,aAAaC,QAAQtB,EAAMM,mBAAqB,IAAO,MAE/EkB,IAAK,SAASlB,GACb,GAAIM,KAAKN,kBAAoBA,EAC7B,CACCM,KAAKmB,aAAaC,KAAKzB,EAAOG,uBAAwB,CAAEJ,gBAAiBA,IAEzE,GAAI2B,GAAGC,QACP,CACCD,GAAGC,QAAQC,cAAc5B,EAAOG,uBAAwB,CAACJ,IAE1D,GAAIe,aACJ,CACCA,aAAaI,QAAQzB,EAAMM,gBAAiBA,EAAkB,IAAM,UAKxEM,KAAKmB,aAAe,IAAIE,GAAGG,MAAMC,aAAazB,KAAM,oBAGrDD,EAAgB2B,UAAY,CAC3BC,KAAM,WAEL,OAAO,IAAIC,QAAQ,SAASC,EAASC,GAEpC,GAAG9B,KAAKJ,YACR,CACC,OAAOiC,IAGR7B,KAAK+B,mBAAmBC,KAAK,SAASC,GAErCjC,KAAKC,mBAAqBD,KAAKkC,iBAAiBD,GAEhDE,UAAUC,aAAaC,iBAAiB,eAAgBhB,GAAGiB,SAAStC,KAAKuC,yBAAyBhC,KAAKP,MAAO,MAC9GA,KAAKJ,YAAc,KACnBI,KAAKmB,aAAaC,KAAKzB,EAAOC,YAAa,IAC3CiC,KACCtB,KAAKP,OAAOwC,MAAMV,IACnBvB,KAAKP,QAGR+B,iBAAkB,WAEjB,OAAO,IAAIH,QAAQ,SAASC,EAASC,GAEpC,IAAIK,UAAUC,eAAiBD,UAAUC,aAAaL,iBACtD,CACC,OAAOD,EAAO,aAEfK,UAAUC,aAAaL,mBAAmBC,KAAK,SAASS,GAEvDZ,EAAQY,IACPlC,KAAKP,QACNO,KAAKP,QAGR0C,UAAW,WAEV,IAAI1C,KAAKJ,YACT,CACC,MAAM,IAAI+C,MAAM,0CAGjB,OAAOxC,OAAOyC,KAAK5C,KAAKe,YAAY8B,OAAS,GAG9CC,kBAAmB,WAElB,IAAI9C,KAAKJ,YACT,CACC,MAAM,IAAI+C,MAAM,0CAEjB,OAAOxC,OAAO4C,OAAO/C,KAAKC,oBAAoB+C,QAAO,SAASC,GAC7D,OAAOA,EAAWC,MAAQ,iBAI5BC,cAAe,WAEd,IAAInD,KAAKJ,YACT,CACC,MAAM,IAAI+C,MAAM,0CAEjB,OAAOxC,OAAO4C,OAAO/C,KAAKC,oBAAoB+C,QAAO,SAASC,GAC7D,OAAOA,EAAWC,MAAQ,iBAI5BE,eAAgB,WAEf,IAAIpD,KAAKJ,YACT,CACC,MAAM,IAAI+C,MAAM,0CAEjB,OAAOxC,OAAO4C,OAAO/C,KAAKC,oBAAoB+C,QAAO,SAASC,GAC7D,OAAOA,EAAWC,MAAQ,kBAI5BG,iBAAkB,WAEjB,MAAO,cAAeC,iBAAiB5B,WAGxC6B,iBAAkB,SAASC,GAE1B,GAAGxD,KAAKE,SACR,CACC,OAEDF,KAAKE,SAAW,KAChB,IAAIuD,EAAiBzD,KAAKC,mBAC1B,IAAIyD,EAAe,GAEnB,IAAIC,EAA+B3D,KAAKC,mBAAmB2D,OAAM,SAASX,GAEzE,OAAOA,EAAWY,UAAY,IAAMZ,EAAWa,OAAS,MAGzD3B,UAAUC,aAAaL,mBAAmBC,KAAK,SAASS,GAEvDA,EAAUzC,KAAKkC,iBAAiBO,GAChCA,EAAQsB,SAAQ,SAASd,GAExB,IAAIe,EAAQP,EAAeQ,WAAU,SAASC,GAC7C,OAAOA,EAAIhB,MAAQD,EAAWC,MAAQgB,EAAIL,UAAYZ,EAAWY,YAElE,GAAIG,IAAU,EACd,CAECP,EAAeU,OAAOH,EAAO,OAG9B,CACCN,EAAaU,KAAKnB,MAEjBjD,MAEH,IAAK2D,EACL,CACC3D,KAAKmB,aAAaC,KAAKzB,EAAOE,cAAe,CAC5CwE,MAAOX,EACPY,QAASb,IAIXzD,KAAKC,mBAAqBwC,EAC1BzC,KAAKE,SAAW,OACfK,KAAKP,QAGRkC,iBAAkB,SAASqC,GAE1B,OAAOA,EAAkBvB,QAAO,SAASwB,GAExC,GAAIA,EAAOtB,MAAQ,cAAgBsB,EAAOX,UAAY,UACtD,CACC,OAAO,MAER,GAAIW,EAAOtB,MAAQ,cAAgBsB,EAAOX,UAAY,iBACtD,CACC,OAAO,MAER,GAAIW,EAAOtB,MAAQ,eAAiBsB,EAAOX,UAAY,UACvD,CACC,OAAO,MAGR,OAAO,SAITtB,yBAA0B,SAASiB,GAElC,IAAKxD,KAAKJ,YACV,CACC,OAGDI,KAAKuD,oBAGNkB,UAAW,SAASC,EAAWC,GAC9B,OAAO3E,KAAKmB,aAAasD,UAAUC,EAAWC,IAG/CC,YAAa,SAASF,EAAWC,GAEhC,OAAO3E,KAAKmB,aAAayD,YAAYF,EAAWC,IAGjDrE,cAAe,SAASuE,GAEvB,IAAIC,EAAS,GACb,IAAI9E,KAAKJ,YACT,CACC,MAAM,IAAI+C,MAAM,0CAEjB,IAAK,IAAIoC,EAAI,EAAGA,EAAI/E,KAAKC,mBAAmB4C,OAAQkC,IACpD,CACC,GAAG/E,KAAKC,mBAAmB8E,GAAG7B,MAAQ2B,EACtC,CACCC,EAAO9E,KAAKC,mBAAmB8E,GAAGlB,UAAY7D,KAAKC,mBAAmB8E,GAAGjB,OAG3E,OAAOgB,IAIT,IAAIE,EAAmB,aAEvBA,EAAiBtD,UAAUuD,YAAc,WAExC,GAAI5D,GAAG6D,SAAS,cAChB,CACC,OAAO7D,GAAGC,QAAQ6D,iBAAmB,QAEjC,GAAI9D,GAAG6D,SAAS,mCACrB,CACC,OAAO7D,GAAG+D,UAAUC,IAAIC,MAAMC,SAASC,qBAAuB,GAG/D,OAAO,OAIRR,EAAiBtD,UAAU+D,KAAO,WAEjC,IAAKzF,KAAKiF,cACV,CACC,GAAIS,OAAOrE,GAAGsE,OACd,CACCD,OAAOrE,GAAGsE,OAAOC,KAAK,iCAGvB,OAAO,MAGR,IAAIC,EACH,8DACC,kCACC,iEACC,qGACD,SACD,SACD,SACA,+BAGD,IAAIC,EAAK,6FACR,kBACC,8CACA,+EACD,MACD,OAECC,QAAQC,KAAK3E,GAAGC,QAAQ2E,aAAa,iBAAkB5E,GAAG6E,UAAS,SAASC,GAE5EA,EAAWC,YAAY,QAAS/E,GAAGgF,QAAQ,sBAC3CF,EAAWC,YAAY,aAAc,CAAEE,MAAO,IAAKC,OAAQ,MAC3DJ,EAAWC,YAAY,gBAAiB,CAAEE,MAAO,IAAKC,OAAQ,MAC9DJ,EAAWC,YAAY,kBAAmB,WAC1CD,EAAWK,eAAe,aAAcT,QAAQC,KAAKS,KAAKnF,QAAQoF,YAAYb,EAAMC,EAAI,UAEvF9F,OAEF,OAAO,MAGRqB,GAAGsF,KAAKC,SAAW,IAAI7G,EACvBsB,GAAGsF,KAAKC,SAASjH,OAASA,EAC1B0B,GAAGsF,KAAKC,SAAS5B,iBAAmB,IAAIA,GAzWxC","file":"hardware.map.js"}