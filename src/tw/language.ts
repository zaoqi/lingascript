namespace ts {
    export const unicodeDic = {
        Keywords: {
            maxLength: 2,
            minLength: 2,
            abstract: "抽象",
            any: "任意",
            as: "轉為",
            bigint: "大樹",
            boolean: "真假",
            break: "跳出",
            case: "若為",
            catch: "捕獲",
            class: "類別",
            continue: "繼續",
            const: "常數",
            constructor: "構造者",
            debugger: "偵錯",
            declare: "聲明",
            default: "預設",
            delete: "刪除",
            do: "運行",
            else: "否則",
            enum: "枚舉",
            export: "導出",
            extends: "擴展",
            false: "假的",
            finally: "最後",
            for: "循環",
            from: "來自",
            function: "函式",
            get: "取得",
            if: "如果",
            implements: "實作",
            import: "導入",
            in: "位於",
            infer: "推斷",
            instanceof: "身為",
            interface: "接口",
            is: "作為",
            keyof: "查看鍵型",
            let: "變數",
            module: "模組",
            namespace: "名域",
            never: "永不",
            new: "新建",
            null: "空的",
            number: "數字",
            object: "物件",
            package: "套件",
            private: "私有",
            protected: "保護",
            public: "公開",
            readonly: "唯讀",
            require: "取得",
            global: "全域",
            return: "返回",
            set: "設定",
            static: "靜態",
            string: "文字",
            super: "父級",
            switch: "判斷",
            symbol: "符號",
            this: "本體",
            throw: "丟出",
            true: "真的",
            try: "嘗試",
            type: "類型",
            typeof: "查看類型",
            undefined: "未定義",
            unique: "唯一",
            unknown: "未知",
            var: "全域變數",
            void: "空的",
            while: "直到",
            with: "外擴",
            yield: "產生",
            async: "非同步",
            await: "等待",
            of: "之於"
        },
        RegexUn: {
            fullTripleSlashReferencePathRegExUn: /^(\/\/\/\s*<引用\s+路径\s*=\s*)('|")(.+?)\2.*?\/>/,
            fullTripleSlashReferenceTypeReferenceDirectiveRegExUn: /^(\/\/\/\s*<引用\s+类型\s*=\s*)('|")(.+?)\2.*?\/>/,
            fullTripleSlashAMDReferencePathRegExUn: /^(\/\/\/\s*<AMD-附件\s+路径\s*=\s*)('|")(.+?)\2.*?\/>/,
            defaultLibReferenceRegExUn: /^(\/\/\/\s*<引用\s+不用默认库\s*=\s*)('|")(.+?)\2\s*\/>/,
        },
        TripleSlash: {
            reference: "參照",
            path: "路徑",
            types: "類型",
            amd_dependency: "AMD-關聯",
            amd_module: "AMD-模組",
            no_default_lib: "不使用預設函式庫",
            name: "名稱",
            true: "真的",
            ts_check: "檢查ts",
            ts_nocheck: "不檢查ts",
            jsx: "jsx",
            factory: "工廠"
        },
        InternalType: {
            unknown: "未知",
            array: "陣列",
            args: "參數組",
            ReadonlyArray: "唯讀陣列_",
            ThisType: "本體型別_",
            IArguments: "增強參數接口_",
            Void: "無值_",
            Undefined: "未定義_",
            Null: "空值_",
            Symbol: "符號_",
            Array: "陣列_",
            Object: "物件_",
            Function: "函式_",
            String: "文字_",
            Number: "數字_",
            Boolean: "真假_",
            RegExp: "正則_",
            TemplateStringsArray: "模板文字陣列_",
            TypedPropertyDescriptor: "類型屬性描述子_",
            PromiseConstructorLike: "預設類建造函式_",
            NonNullable: "不可空_",
        },
        Promise: {
            promise: "預設",
            then: "然後",
            Promise: "預設_"
        },
        Iterator: {
            value: "值",
            next: "下個",
            AsyncIterable: "非同步可迭代",
            AsyncIterableIterator: "非同步可迭代器",
            Iterable: "可迭代",
            Iterator: "迭代器",
            IterableIterator: "可迭代器"
        },
        Array: {
            length: "長度",
            concat: "連接",
            slice: "拆分",
            push: "推入",
            unshift: "推出"
        },
        Function: {
            apply: "應用",
            bind: "繫結",
            call: "呼叫",
            caller: "呼叫者",
            name: "名稱",
            eval: "執行",
            length: "長度",
            arguments: "參數"
        },
        Object: {
            prototype: "原型",
        },
        JavaScript: {
            use_strict: "嚴格模式",
            global: "全域",
            self: "自身",
            window: "窗口",
            exports: "輸出"
        },
        JSDoc: {
            augments: "參數",
            extends: "擴展",
            class: "類別",
            prop: "屬性",
            property: "長屬性",
            constructor: "建造子",
            arg: "短參數",
            argument: "長參數",
            param: "參數",
            return: "返回",
            returns: "返回多筆",
            template: "模板",
            type: "類別",
            typedef: "類別定義"
        },
        Jsx: {
            IntrinsicElements: "內置元素_",
            ElementClass: "元素類別_",
            ElementAttributesProperty: "元素特性屬性_"
        },
        Symbol: {
            Symbol: "符號_",
            for: "為了"
        },
        MetaData: {
            target: "目標",
            length: "長度",
            meta: "元資料",
        },
        Lib: {
            Infinity: "無窮大",
            NaN: "非数字_",
            Console: "控制台_",
            console: "控制台"
        },
        Types: {
            typeDefinitionDirSuffix: "@types-zh-tw"
        },
        Language: {
            language: "zh-tw"
        },
        golbalType: {
            AsyncIterable: "非同步可迭代_",
            AsyncIterableIterator: "非同步可迭代器_",
            Iterable: "可迭代_",
            Iterator: "迭代器_",
            IterableIterator: "可迭代器_",
            AsyncIterator: "非同步迭代器_",
            TemplateStringsArray: "模板文字陣列_",
            TypedPropertyDescriptor: "類型屬性描述子_",
            PromiseConstructorLike: "預設類建構子_",
            Symbol: "符號_",
            Promise: "預設",
            IArguments: "增強參數接口_",
            Array: "陣列_",
            Object: "物件_",
            Function: "函式_",
            String: "文字_",
            Number: "數字_",
            Boolean: "真假_",
            RegExp: "正則_",
            NonNullable: "不可空_",
            ReadonlyArray: "唯讀陣列_",
            ThisType: "本體型別_",
            JSX: "JSX",
        }
    };
}
