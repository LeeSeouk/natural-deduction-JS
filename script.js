// 요소 생성
const h1 = document.createElement("h1");
h1.textContent = "자연연역 연습장";

const p = document.createElement("p");
p.textContent = "자연연역을 연습할 수 있는 공간입니다. 아래에 문제를 입력하고 복합명제를 추가하세요.";

//자연연역 문장
const textareaProblem = document.createElement("textarea");
textareaProblem.id = "problem-statements";
textareaProblem.cols = 80;
textareaProblem.rows = 5;
textareaProblem.value = `아담이 백만장자라면, 가난은 이브가 그의 청혼을 거절한 이유가 아니다.
그런데 이브가 그의 청혼을 거절한 이유는 아담이 가난하다는 것 또는 그가 매력이 없다는 것 둘 중의 하나이다.
아담은 백만장자이다. 그러므로 매력이 없다는 것이 아담이 청혼을 거절당한 이유임에 틀림없다.`;
textareaProblem.style.marginBottom = "10px";

//복합명제 컨테이너
const compoundContainer = document.createElement("div");
compoundContainer.style.display = "flex";
compoundContainer.style.alignItems = "center";
compoundContainer.style.gap = "5px";
compoundContainer.style.marginBottom = "10px";

//복합명제 입력박스
const textareaCompound = document.createElement("textarea");
textareaCompound.id = "compound-statements";
textareaCompound.cols = 80;
textareaCompound.rows = 1;
textareaCompound.placeholder = `복합명제를 입력하세요.`;

//복합명제 버튼
const compoundButton = document.createElement("button");
compoundButton.textContent = "추가";

//복합명제 텍스트 박스
const compoundTextBox = document.createElement("textarea");
compoundTextBox.id = "compound-textbox";
compoundTextBox.cols = 80;
compoundTextBox.rows = "auto";
compoundTextBox.style.marginBottom = "10px";

//단순명제 컨테이너
const primaryContainer = document.createElement("div");
primaryContainer.style.display = "flex";
primaryContainer.style.alignItems = "center";
primaryContainer.style.gap = "5px";
primaryContainer.style.marginBottom = "10px";

//단순명제 입력박스
const textareaPrimary = document.createElement("textarea");
textareaPrimary.id = "primary-statements";
textareaPrimary.cols = 80;
textareaPrimary.rows = 1;
textareaPrimary.placeholder = `단순명제를 입력하세요.`;

//단순명제 버튼
const primaryButton = document.createElement("button");
primaryButton.textContent = "추가";

//단순명제 텍스트박스
const primaryTextBox = document.createElement("textarea");
primaryTextBox.id = "primary-textbox";
primaryTextBox.cols = 80;
primaryTextBox.rows = "auto";
primaryTextBox.style.marginBottom = "10px";

//기호명제 컨테이너
const symbolicContainer = document.createElement("div");
symbolicContainer.style.display = "flex";
symbolicContainer.style.alignItems = "center";
symbolicContainer.style.gap = "1px";
symbolicContainer.style.marginBottom = "10px";

const textareaSymbolic = document.createElement("textarea");
textareaSymbolic.id = "symbolic-textarea";
textareaSymbolic.style.width = "300px";
textareaSymbolic.rows = 1;
textareaSymbolic.placeholder = `기호명제를 입력하세요.`;

const textareaSymbolic1 = document.createElement("textarea");
textareaSymbolic1.id = "symbolic-textarea1";
textareaSymbolic1.style.width = "60px";
textareaSymbolic1.rows = 1;

const textareaSymbolic2 = document.createElement("textarea");
textareaSymbolic2.id = "symbolic-textarea2";
textareaSymbolic2.style.width = "60px";
textareaSymbolic2.rows = 1;

const textareaSymbolic3 = document.createElement("textarea");
textareaSymbolic3.id = "symbolic-textarea3";
textareaSymbolic3.style.width = "60px";
textareaSymbolic3.rows = 1;

const selectSymbolic = document.createElement("select");
selectSymbolic.id = "symbolic-select";
selectSymbolic.style.width = "73px";
selectSymbolic.rows = 1;

const options = ["전제", "결론", "조건기호제거 (→제거)", "선언기호제거 (∨제거)", "선언기호도입 (∨도입)",
    "조건기호도입 (→도입)", "연언기호제거 (∧제거)", "연언기호도입 (∧도입)", "쌍조건기호도입 (↔도입)",
    "쌍조건기호제거 (↔제거)", "부정기호제거 (∼제거)", "부정기호도입 (∼도입)"
];

for (let i = 0; i < options.length; i++){
    const option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    selectSymbolic.appendChild(option);
}

//기호명제 버튼 컨테이너
const symbolicBtnContainer = document.createElement("div");
symbolicBtnContainer.style.display = "flex";
symbolicBtnContainer.style.alignItems = "center";
symbolicBtnContainer.style.gap = "1px";
symbolicBtnContainer.style.marginBottom = "10px";

const symbolicBtn1 = document.createElement("button");
symbolicBtn1.textContent = "추가";

const symbolicBtn2 = document.createElement("button");
symbolicBtn2.textContent = "가정 [[";

const symbolicBtn3 = document.createElement("button");
symbolicBtn3.textContent = "]] 가정";

const symbolicBtn4 = document.createElement("button");
symbolicBtn4.textContent = "∼";

const symbolicBtn5 = document.createElement("button");
symbolicBtn5.textContent = "∧";

const symbolicBtn6 = document.createElement("button");
symbolicBtn6.textContent = "∨";

const symbolicBtn7 = document.createElement("button");
symbolicBtn7.textContent = "→";

const symbolicBtn8 = document.createElement("button");
symbolicBtn8.textContent = "↔";

//기호명제 텍스트박스
const symbolicTextBox = document.createElement("textarea");
symbolicTextBox.id = "symbolic-textbox";
symbolicTextBox.cols = 80;
symbolicTextBox.rows = 2;
symbolicTextBox.style.marginBottom = "10px";

const information = document.createElement("h1");
information.textContent = "20223044 이서욱";

const gitdiv = document.createElement("div");

const gitpage = document.createElement("a");
gitpage.href = "https://github.com/LeeSeouk/natural-deduction-JS.git";
gitpage.textContent = "https://github.com/LeeSeouk/natural-deduction-JS.git";
gitpage.target = "_blank";
gitdiv.appendChild(gitpage);

// body에 추가
document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(textareaProblem);
document.body.appendChild(compoundContainer);
document.body.appendChild(compoundTextBox);
document.body.appendChild(primaryContainer);
document.body.appendChild(primaryTextBox);
document.body.appendChild(symbolicContainer);
document.body.appendChild(symbolicBtnContainer);
document.body.appendChild(symbolicTextBox);
document.body.appendChild(information);
document.body.appendChild(gitdiv);

//복합명제 자식요소 추가
compoundContainer.appendChild(textareaCompound);
compoundContainer.appendChild(compoundButton);

//단순명제 자식요소 추가
primaryContainer.appendChild(textareaPrimary);
primaryContainer.appendChild(primaryButton);

//기호명제 자식요소 추가
symbolicContainer.appendChild(textareaSymbolic);
symbolicContainer.appendChild(textareaSymbolic1);
symbolicContainer.appendChild(textareaSymbolic2);
symbolicContainer.appendChild(textareaSymbolic3);
symbolicContainer.appendChild(selectSymbolic);

//기호명제 버튼 자식요소 추가
symbolicBtnContainer.appendChild(symbolicBtn1);
symbolicBtnContainer.appendChild(symbolicBtn2);
symbolicBtnContainer.appendChild(symbolicBtn3);
symbolicBtnContainer.appendChild(symbolicBtn4);
symbolicBtnContainer.appendChild(symbolicBtn5);
symbolicBtnContainer.appendChild(symbolicBtn6);
symbolicBtnContainer.appendChild(symbolicBtn7);
symbolicBtnContainer.appendChild(symbolicBtn8);