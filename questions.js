
/**
 * 題庫庫說明：
 * 每個 Key (如 biochem, pharmacology) 代表一個科目。
 * 每個科目包含 title 與 questions 陣列。
 * type: "multiple" 為選擇題，第一個選項為正確答案。
 * type: "handwriting" 為手寫題，需填寫 ans 與 keywords。
 * 題庫資料庫 (Question Library)
 * 適用於 生化刷題神器 V6.5
 * * 結構說明：
 * - key (如 "food_science"): 科目代號
 * - title: 科目顯示名稱
 * - questions: 題目陣列
 * - type: "multiple" (選擇題) | "handwriting" (手寫題)
 * - options: [正確答案, 錯誤選項1, 錯誤選項2, 錯誤選項3] (程式會自動隨機排列)
 * - keywords: 手寫題的關鍵字偵測 (陣列)
 */

const questionLibrary = {
    "biochem": {
        "title": "生物化學 (Biochemistry)"，
    "food_science": {
        "title": "食物學原理 (Food Science)"，
        "questions": [
            { 
                id: "bc_001"， chapter: "Ch3 胺基酸"， type: "multiple"，
                q: "下列何者為中性胺基酸？"， 
                options: ["甘胺酸 (Glycine)"， "離胺酸"， "組胺酸"， "麩胺酸"]， 
                rationale: "Glycine 的 R 基只有一個 H，非極性中性。" 
            }，
            {
                id: "bc_hw_1"， chapter: "Ch3 蛋白質"， type: "handwriting"，
                q: "請說明變性作用 (Denaturation) 對蛋白質各級結構的影響。"，
                ans: "變性會破壞蛋白質的二、三、四級結構，但不會破壞一級結構（胜肽鍵）。"，
                keywords: ["二"， "三"， "四"， "一級"， "胜肽鍵"]，
                rationale: "變性僅涉及非共價鍵的斷裂，不涉及化學水解。"
            }
        ]
    }，
    "pharma": {
        "title": "藥理學 (Pharmacology)"，
        "questions": [
            { 
                id: "ph_001"， chapter: "藥效學"， type: "multiple"，
                q: "下列哪種藥物作用機制屬於競爭性抑制？"， 
                options: ["競爭與受體結合"， "改變受體結構"， "共價結合"， "加速藥物代謝"]， 
                rationale: "競爭性抑制是指抑制劑與受質爭奪同一個活化位。" 
            // --- 選擇題 (Multiple Choice) ---
            {
                id: "fs_01"，
                chapter: "油脂化學"，
                type: "multiple"，
                q: "關於食用油脂的自氧化反應，下列何者與其無關？"，
                options: [
                    "脂肪酸分子量大小"， // 正確答案 (B)
                    "脂肪酸不飽和程度"，
                    "光線"，
                    "氧氣"
                ]，
                rationale: "油脂自氧化主要取決於「不飽和程度」與「氧氣」接觸，光線會引發光敏感氧化。分子量大小並非決定氧化快慢的直接因素。"
            }，
            {
                id: "fs_02"，
                chapter: "油脂加工"，
                type: "multiple"，
                q: "大豆沙拉油純化過程，國內常省略下列哪個步驟？"，
                options: [
                    "冬化 (Winterization)"， // 正確答案 (C)
                    "脫膠 (Degumming)"，
                    "脫色 (Bleaching)"，
                    "脫臭 (Deodorization)"
                ]，
                rationale: "冬化是為了去除高熔點三酸甘油酯，確保冷藏時不混濁。若油品非強調冷藏清澈度（如一般煎炸用），此步驟最可能被省略。"
            }，
            {
                id: "fs_03"，
                chapter: "酵素反應"，
                type: "multiple"，
                q: "冷藏生蝦之黑變原因，係蝦體本身的何種酵素作用所導致？"，
                options: [
                    "酪胺酸酶 (Tyrosinase)"， // 正確答案 (B)
                    "抗壞血酸氧化酶"，
                    "澱粉酶"，
                    "脂氧合酶"
                ]，
                rationale: "蝦子黑變是因為「酪胺酸酶」將酪胺酸氧化，生成黑色素所致。"
            }，
            {
                id: "fs_04"，
                chapter: "油脂成分"，
                type: "multiple"，
                q: "以下各種油脂中，那一種所含的單元不飽和脂肪酸 (MUFA) 最多？"，
                options: [
                    "橄欖油 (Olive oil)"， // 正確答案 (A)
                    "棉籽油"，
                    "沙拉油 (大豆油)"，
                    "花生油"
                ]，
                rationale: "橄欖油富含油酸 (Oleic acid)，是單元不飽和脂肪酸含量最高的代表性油脂。"
            }，
            {
                id: "fs_05"，
                chapter: "食品化學",
                type: "multiple",
                q: "海產類的魚腥臭味是來自下列何種物質？",
                options: [
                    "三甲胺 (Trimethylamine)", // 正確答案 (D)
                    "丙酮",
                    "尿素",
                    "甲硫醇"
                ],
                rationale: "海產腐敗時，氧化三甲胺會被還原成「三甲胺」，這是魚腥臭味的主要來源。"
            },
            {
                id: "fs_06",
                chapter: "大豆加工",
                type: "multiple",
                q: "以下何種食品可以「不使用」大豆作為原料？",
                options: [
                    "醬油", // 正確答案 (D)
                    "豆腐",
                    "天貝 (Tempe)",
                    "納豆 (Natto)"
                ],
                rationale: "醬油除了大豆外，也可用黑豆、小麥甚至動物內臟分解液製作。而豆腐、天貝、納豆的主要原料必須是大豆。"
            },
            {
                id: "fs_07",
                chapter: "油脂安定性",
                type: "multiple",
                q: "下列油脂何者比較容易氧化酸敗？",
                options: [
                    "大豆油", // 正確答案 (A)
                    "棕櫚油",
                    "豬油",
                    "牛油"
                ],
                rationale: "大豆油含有較高比例的多元不飽和脂肪酸 (PUFA)，雙鍵越多越不穩定，故最容易氧化。"
            },
            {
                id: "fs_08",
                chapter: "水產加工",
                type: "multiple",
                q: "水產煉製品的彈性品質較會受下列何種因素的影響？(1)品溫管控 (2)鮮度 (3)魚體大小 (4)pH值",
                options: [
                    "1, 2, 4", // 正確答案 (C)
                    "1, 2, 3",
                    "1, 3, 4",
                    "2, 3, 4"
                ],
                rationale: "魚體大小與蛋白質凝膠能力無關。溫度、鮮度（蛋白質變性程度）和 pH 值才是影響魚漿彈性的關鍵。"
            },
            {
                id: "fs_09",
                chapter: "食品安全",
                type: "multiple",
                q: "鯖魚因微生物作用，會產生下列那種物質，而使消費者發生過敏現象？",
                options: [
                    "組織胺 (Histamine)", // 正確答案 (D)
                    "三聚肌胺",
                    "雙氨胺",
                    "箭菇胺"
                ],
                rationale: "紅肉魚（如鯖魚）富含組織胺酸，不新鮮時會被細菌脫羧形成有毒的「組織胺」。"
            },
            {
                id: "fs_10",
                chapter: "蔬果生理",
                type: "multiple",
                q: "在蔬果的儲藏上，何種氣體能促進水果的熟成、葉綠素的分解以及植物的老化？",
                options: [
                    "乙烯 (C2H4)", // 正確答案 (A)
                    "二氧化碳 (CO2)",
                    "氧氣 (O2)",
                    "氮氣 (N2)"
                ],
                rationale: "乙烯是植物的天然老化荷爾蒙，會加速後熟與老化。"
            },
            {
                id: "fs_11",
                chapter: "水產營養",
                type: "multiple"，
                q: "下列有關水產品營養價值的敘述，何者錯誤？"，
                options: [
                    "魚貝類富含組織胺"， // 正確答案 (B)
                    "魚類為高蛋白質食品"，
                    "魚貝類富含牛磺酸"，
                    "魚貝類富含高度不飽和脂肪酸"
                ]，
                rationale: "「組織胺」是腐敗產生的毒素，不是營養素！正確應是富含組織胺「酸」(胺基酸)。"
            }，
            {
                id: "fs_12"，
                chapter: "色素化學"，
                type: "multiple"，
                q: "炒菜時加入小蘇打粉 (鹼性)，可防止下列那一種色素變色？"，
                options: [
                    "葉綠素"， // 正確答案 (A)
                    "花青素"，
                    "類胡蘿蔔素"，
                    "胡蘿蔔素"
                ]，
                rationale: "葉綠素在酸性下會變成黃褐色的脫鎂葉綠素。加入小蘇打維持鹼性，可保留鮮綠色（但維生素 C 易流失）。"
            }，
            {
                id: "fs_13"，
                chapter: "油脂營養"，
                type: "multiple"，
                q: "下列那項可提供比較豐富的 ω-3 脂肪酸？"，
                options: [
                    "亞麻籽油"， // 正確答案 (D)
                    "棕櫚油"，
                    "核桃油"，
                    "大豆油"
                ]，
                rationale: "亞麻籽油 (Flaxseed oil) 富含 α-次亞麻油酸 (ALA)，是植物性 ω-3 的極佳來源。"
            }，
            {
                id: "fs_14"，
                chapter: "脂肪酸分類"，
                type: "multiple"，
                q: "下列何者「不屬於」ω-3 脂肪酸？"，
                options: [
                    "亞麻油酸 (Linoleic acid)"， // 正確答案 (C)
                    "二十碳五烯酸 (EPA)"，
                    "二十二碳六烯酸 (DHA)"，
                    "次亞麻油酸 (Linolenic acid)"
                ]，
                rationale: "亞麻油酸 (C18:2) 是 ω-6 脂肪酸。次亞麻油酸、EPA、DHA 都是 ω-3 系列。"
            }，
            {
                id: "fs_15"，
                chapter: "褐變反應"，
                type: "multiple"，
                q: "放在盤子內切開的蘋果呈現褐變外觀，表示出現下列何種反應？"，
                options: [
                    "酵素性褐變反應"， // 正確答案 (C)
                    "水解反應"，
                    "色素分解反應"，
                    "微生物劣變反應"
                ]，
                rationale: "多酚氧化酶 (PPO) 接觸氧氣，將多酚氧化成褐色色素，這就是酵素性褐變。"
            }，
            {
                id: "fs_16"，
                chapter: "色素安定性"，
                type: "multiple"，
                q: "下列蔬果色素中最容易變色（最不安定）的是？"，
                options: [
                    "葉綠素"， // 正確答案 (A)
                    "番茄紅素"，
                    "胡蘿蔔素"，
                    "甜菜苔"
                ]，
                rationale: "葉綠素非常敏感，遇熱、遇酸都會迅速變色。類胡蘿蔔素則相對安定。"
            }，

            // --- 簡答題 (Short Answer / Handwriting) ---
            {
                id: "fs_sa_01"，
                chapter: "肉品加工"，
                type: "handwriting"，
                q: "請說明何謂「重組肉」及可能之食品安全疑慮？"，
                ans: "重組肉是將不同來源的肉類經組合黏著而成。疑慮：加工過程接觸面積大，易滋生細菌，故必須「煮熟」食用。"，
                keywords: ["組合"， "黏著"， "細菌"， "煮熟"， "不同來源"]，
                rationale: "重點在於「非原塊肉」且「菌數較高」，所以國內規定必須標示並熟食。"
            }，
            {
                id: "fs_sa_02"，
                chapter: "水產檢驗"，
                type: "handwriting"，
                q: "請說明魚貝類新鮮度的判斷指標 (感官與化學)。"，
                ans: "感官指標：看魚眼清晰、魚鰓鮮紅、魚體有彈性。化學指標：檢測「揮發性鹽基氮 (VBN)」，數值越高越不新鮮。"，
                keywords: ["魚眼"， "魚鰓"， "VBN"， "揮發性鹽基氮"， "彈性"]，
                rationale: "VBN 是蛋白質分解產生氨氣等鹼性物質的總稱，是法定鮮度指標。"
            }，
            {
                id: "fs_sa_03"，
                chapter: "脂質化學"，
                type: "handwriting"，
                q: "請定義 ω-3 脂肪酸，並舉出兩個例子。"，
                ans: "定義：從甲基端 (CH3) 算起第 3 個碳出現第一個雙鍵的不飽和脂肪酸。例子：EPA、DHA、次亞麻油酸。"，
                keywords: ["甲基端"， "第3個碳"， "雙鍵"， "EPA"， "DHA"， "次亞麻油酸"]，
                rationale: "關鍵在於「雙鍵位置」的算法。這類脂肪酸對抗發炎很有幫助。"
            }，
            {
                id: "fs_sa_04"，
                chapter: "色素特性"，
                type: "handwriting"，
                q: "舉出 2 例植物性天然色素並說明其特性。"，
                ans: "1. 葉綠素：最不安定，遇酸變黑。2. 類胡蘿蔔素：脂溶性，安定。3. 花青素：遇酸變紅，遇鹼變藍。"，
                keywords: ["葉綠素"， "類胡蘿蔔素"， "花青素"， "安定"， "脂溶性"， "酸"]，
                rationale: "葉綠素怕酸，類胡蘿蔔素要配油吃，花青素會像石蕊試紙一樣變色。"
            }
        ]
    }
