/**
 * 題庫庫說明：
 * 每個 Key (如 biochem, pharmacology) 代表一個科目。
 * 每個科目包含 title 與 questions 陣列。
 * type: "multiple" 為選擇題，第一個選項為正確答案。
 * type: "handwriting" 為手寫題，需填寫 ans 與 keywords。
 */
const questionLibrary = {
    "biochem": {
        "title": "生物化學 (Biochemistry)",
        "questions": [
            { 
                id: "bc_001", chapter: "Ch3 胺基酸", type: "multiple",
                q: "下列何者為中性胺基酸？", 
                options: ["甘胺酸 (Glycine)", "離胺酸", "組胺酸", "麩胺酸"], 
                rationale: "Glycine 的 R 基只有一個 H，非極性中性。" 
            },
            {
                id: "bc_hw_1", chapter: "Ch3 蛋白質", type: "handwriting",
                q: "請說明變性作用 (Denaturation) 對蛋白質各級結構的影響。",
                ans: "變性會破壞蛋白質的二、三、四級結構，但不會破壞一級結構（胜肽鍵）。",
                keywords: ["二", "三", "四", "一級", "胜肽鍵"],
                rationale: "變性僅涉及非共價鍵的斷裂，不涉及化學水解。"
            }
        ]
    },
    "pharma": {
        "title": "藥理學 (Pharmacology)",
        "questions": [
            { 
                id: "ph_001", chapter: "藥效學", type: "multiple",
                q: "下列哪種藥物作用機制屬於競爭性抑制？", 
                options: ["競爭與受體結合", "改變受體結構", "共價結合", "加速藥物代謝"], 
                rationale: "競爭性抑制是指抑制劑與受質爭奪同一個活化位。" 
            }
        ]
    }
};
