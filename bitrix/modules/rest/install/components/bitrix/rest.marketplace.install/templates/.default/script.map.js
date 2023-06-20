{"version":3,"sources":["script.js"],"names":["BX","namespace","Rest","Marketplace","Install","init","params","this","code","CODE","version","VERSION","checkHash","CHECK_HASH","installHash","INSTALL_HASH","from","FROM","iframe","IFRAME","redirectPriority","REDIRECT_PRIORITY","formNode","buttonInstallNode","findChildByClassName","buttonCloseNode","bind","onSubmitForm","onClickClose","event","preventDefault","SidePanel","Instance","close","checked","innerHTML","message","show","hasClass","addClass","queryParam","check_hash","install_hash","ajax","runAction","data","then","response","result","error","helperCode","top","UI","InfoHelper","error_description","redirect","location","href","util","remove_url_param","installed","eventResult","onCustomEvent","open","reload","rest","AppLayout","openApplication","id","initHelper","window","isInited","frameUrlTemplate","frameNode","iframeId","proxy","origin","indexOf","action","slider","getTopSlider"],"mappings":"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","file":"script.map.js"}