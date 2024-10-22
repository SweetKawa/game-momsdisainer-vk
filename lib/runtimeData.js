const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "indie",
        productName: "Mom's Designer",
        productVersion: "0.0.0.2",
        sdkVersion: "3.17.19",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Mom's Designer_Web_VKontakte.loader.js",
        dataURL: "bin/Mom's Designer_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/Mom's Designer_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/Mom's Designer_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "Icon_ChocTile_Bear_L01.png",
        backgroundTextureName: "MissRobins_SplashScreen_02.png",

        // Aspect ratio.
        desktopAspectRatio: 1.777778,
        mobileAspectRatio: 1.777778,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();