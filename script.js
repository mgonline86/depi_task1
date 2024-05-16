// Helper Functions [Start]
function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return data;
}

function handleSectionAnimation(section) {
    section.classList.add("an-shake");
    setTimeout(() => {
        section.classList.remove("an-shake");
    }, 1000);
}
// Helper Functions [End]

// Level 1
// Q1 [Start]
const q1Form = document.querySelector("#q1_form");
const q1Out = q1Form.querySelector(".output");
const q1Section = q1Form.parentElement;
q1Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q1n1, q1n2 } = getFormData(q1Form);
    const result = Number(q1n1) + Number(q1n2);
    q1Out.innerText = result.toFixed(2);
    q1Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q1Out.classList.remove("an-z-out-in");
    }, 1000);
})
q1Form.addEventListener("reset", (e) => {
    q1Out.innerText = "";
    handleSectionAnimation(q1Section);
});
// Q1 [End]

// Q2 [Start]
const q2Form = document.querySelector("#q2_form");
const q2Out = q2Form.querySelector(".output");
const q2Section = q2Form.parentElement;
q2Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q2n1, q2n2, q2n3 } = getFormData(q2Form);
    const result = (Number(q2n1) + Number(q2n2) + Number(q2n3)) / 3;
    q2Out.innerText = result.toFixed(2);
    q2Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q2Out.classList.remove("an-z-out-in");
    }, 1000);
})
q2Form.addEventListener("reset", (e) => {
    q2Out.innerText = "";
    handleSectionAnimation(q2Section);
});
// Q2 [End]

// Level 2
// Q3 [Start]
const q3Form = document.querySelector("#q3_form");
const q3Out = q3Form.querySelector(".output");
const q3Section = q3Form.parentElement;
q3Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q3n1, q3n2 } = getFormData(q3Form);
    const result = Number(q3n1) / Number(q3n2);
    q3Out.innerText = `${result.toFixed(2)} Km/h`;
    q3Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q3Out.classList.remove("an-z-out-in");
    }, 1000);
})
q3Form.addEventListener("reset", (e) => {
    q3Out.innerText = "";
    handleSectionAnimation(q3Section);
});
// Q3 [End]

// Q4 [Start]
const q4Form = document.querySelector("#q4_form");
const q4Out = q4Form.querySelector(".output");
const q4Section = q4Form.parentElement;
q4Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q4n1, q4n2 } = getFormData(q4Form);
    const result = Number(q4n1) / (Number(q4n2) * Number(q4n2));
    q4Out.innerText = `${result.toFixed(2)}`;
    q4Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q4Out.classList.remove("an-z-out-in");
    }, 1000);
})
q4Form.addEventListener("reset", (e) => {
    q4Out.innerText = "";
    handleSectionAnimation(q4Section);
});
// Q4 [End]

// Q5 [Start]
const q5Form = document.querySelector("#q5_form");
const [mOut1, kmOut2] = q5Form.querySelectorAll(".output");
const q5Section = q5Form.parentElement;
q5Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q5n1 } = getFormData(q5Form);
    const mResult = Number(q5n1) / 100;
    const kmResult = Number(q5n1) / (10 ** 5);
    mOut1.innerText = `${mResult.toFixed(2)}`;
    mOut1.classList.add("an-z-out-in");
    kmOut2.innerText = `${kmResult.toFixed(2)}`;
    kmOut2.classList.add("an-z-out-in");
    setTimeout(() => {
        mOut1.classList.remove("an-z-out-in");
        kmOut2.classList.remove("an-z-out-in");
    }, 1000);
})
q5Form.addEventListener("reset", (e) => {
    mOut1.innerText = "";
    kmOut2.innerText = "";
    handleSectionAnimation(q5Section);
});
// Q5 [End]

// Q6 [Start]
const q6Form = document.querySelector("#q6_form");
const [bOut1, gbOut2] = q6Form.querySelectorAll(".output");
const q6Section = q6Form.parentElement;
q6Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q6n1 } = getFormData(q6Form);
    const bResult = Number(q6n1) * 8;
    const gbResult = Number(q6n1) / (10 ** 9);
    bOut1.innerText = `${bResult.toFixed(2)}`;
    bOut1.classList.add("an-z-out-in");
    gbOut2.innerText = `${gbResult.toFixed(2)}`;
    gbOut2.classList.add("an-z-out-in");
    setTimeout(() => {
        bOut1.classList.remove("an-z-out-in");
        gbOut2.classList.remove("an-z-out-in");
    }, 1000);
})
q6Form.addEventListener("reset", (e) => {
    bOut1.innerText = "";
    gbOut2.innerText = "";
    handleSectionAnimation(q6Section);
});
// Q6 [End]

// Q7 [Start]
const q7Form = document.querySelector("#q7_form");
const q7Out = q7Form.querySelector(".output");
const q7Section = q7Form.parentElement;
q7Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q7n1, q7n2 } = getFormData(q7Form);
    const result = Number(q7n2) / Number(q7n1);
    q7Out.innerText = `${result.toFixed(2)}`;
    q7Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q7Out.classList.remove("an-z-out-in");
    }, 1000);
})
q7Form.addEventListener("reset", (e) => {
    q7Out.innerText = "";
    handleSectionAnimation(q7Section);
});
// Q7 [End]

// Q8 [Start]
const q8Form = document.querySelector("#q8_form");
const q8Out = q8Form.querySelector(".output");
const q8Section = q8Form.parentElement;
q8Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q8n1, q8n2 } = getFormData(q8Form);
    const result = (Number(q8n2) * 1000) / Number(q8n1);
    q8Out.innerText = `${result.toFixed(2)} sec${result === 1 ? "" : "s"}`;
    q8Out.classList.add("an-z-out-in");
    setTimeout(() => {
        q8Out.classList.remove("an-z-out-in");
    }, 1000);
})
q8Form.addEventListener("reset", (e) => {
    q8Out.innerText = "";
    handleSectionAnimation(q8Section);
});
// Q8 [End]

// Q9 [Start]
const q9Form = document.querySelector("#q9_form");
const [area, circum] = q9Form.querySelectorAll(".output");
const q9Section = q9Form.parentElement;
q9Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { q9n1 } = getFormData(q9Form);
    const areaResult = Math.PI * (Number(q9n1) ** 2);
    const circumResult = 2 * Math.PI * Number(q9n1);
    area.innerText = `${areaResult.toFixed(2)}`;
    area.classList.add("an-z-out-in");
    circum.innerText = `${circumResult.toFixed(2)}`;
    circum.classList.add("an-z-out-in");
    setTimeout(() => {
        area.classList.remove("an-z-out-in");
        circum.classList.remove("an-z-out-in");
    }, 1000);
})
q9Form.addEventListener("reset", (e) => {
    area.innerText = "";
    circum.innerText = "";
    handleSectionAnimation(q9Section);
});
// Q9 [End]

// Q10 [Start]
const q10Form = document.querySelector("#q10_form");
const [q10Out1, q10Out2] = q10Form.querySelectorAll(".output");
const q10Section = q10Form.parentElement;
q10Form.addEventListener("submit", (e) => {
    e.preventDefault();
    let { q10n1, q10n2 } = getFormData(q10Form);
    [q10n1, q10n2] = [Number(q10n2), Number(q10n1)];
    q10Out1.innerText = `${q10n1.toFixed(2)}`;
    q10Out1.classList.add("an-z-out-in");
    q10Out2.innerText = `${q10n2.toFixed(2)}`;
    q10Out2.classList.add("an-z-out-in");
    setTimeout(() => {
        q10Out1.classList.remove("an-z-out-in");
        q10Out2.classList.remove("an-z-out-in");
    }, 1000);
})
q10Form.addEventListener("reset", (e) => {
    q10Out1.innerText = "";
    q10Out2.innerText = "";
    handleSectionAnimation(q10Section);
});
// Q10 [End]