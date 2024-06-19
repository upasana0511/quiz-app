(function(){"use strict";var e={6286:function(e,t,r){var n=r(9726);function s(e,t,r,s,i,o){const u=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(u)}var i={name:"App"},o=r(6262);const u=(0,o.A)(i,[["render",s]]);var a=u,l=r(5220);const c=e=>((0,n.Qi)("data-v-6a4c126e"),e=e(),(0,n.jt)(),e),d={class:"home"},h=c((()=>(0,n.Lk)("div",{class:"background-image"},null,-1))),m={class:"content"},p=c((()=>(0,n.Lk)("h1",{class:"title"},"Welcome to the Quiz App",-1))),f=c((()=>(0,n.Lk)("button",{class:"start-quiz-button"},"Start Quiz",-1))),v=c((()=>(0,n.Lk)("footer",{class:"footer"},"Created by Upasana Bhatt",-1)));function w(e,t,r,s,i,o){const u=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",d,[h,(0,n.Lk)("div",m,[p,(0,n.bF)(u,{to:"/quiz"},{default:(0,n.k6)((()=>[f])),_:1}),v])])}var g={name:"HomeView"};const k=(0,o.A)(g,[["render",w],["__scopeId","data-v-6a4c126e"]]);var y=k;const b=e=>((0,n.Qi)("data-v-65257c89"),e=e(),(0,n.jt)(),e),C={class:"quiz"},Q={key:0},L={class:"timer"},x={class:"progress-ring",width:"120",height:"120"},A={class:"time-left"},_={class:"button-container"},q=["disabled"],I={key:1},E={key:0},O=b((()=>(0,n.Lk)("h3",null,"Questions you answered incorrectly:",-1)));function z(e,t,r,s,i,o){const u=(0,n.g2)("QuestionComponent"),a=(0,n.g2)("ResultComponent");return(0,n.uX)(),(0,n.CE)("div",C,[i.showResults?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",Q,[(0,n.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.Wv)(u,{key:o.currentQuestion.id,question:o.currentQuestion,modelValue:o.currentAnswer,"onUpdate:modelValue":t[0]||(t[0]=e=>o.currentAnswer=e)},null,8,["question","modelValue"]))])),_:1}),(0,n.Lk)("div",L,[((0,n.uX)(),(0,n.CE)("svg",x,[(0,n.Lk)("circle",{class:(0,n.C4)(["progress-ring__circle",o.circleColor]),"stroke-width":"4",fill:"transparent",r:"54",cx:"60",cy:"60"},null,2)])),(0,n.Lk)("div",A,(0,n.v_)(i.timeLeft)+"s",1)]),(0,n.Lk)("div",_,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.prevQuestion&&o.prevQuestion(...e)),disabled:0===i.currentQuestionIndex,class:"nav-button"},"Previous",8,q),i.currentQuestionIndex<i.questions.length-1?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>o.nextQuestion&&o.nextQuestion(...e)),class:"nav-button"},"Next")):(0,n.Q3)("",!0),i.currentQuestionIndex===i.questions.length-1?((0,n.uX)(),(0,n.CE)("button",{key:1,onClick:t[3]||(t[3]=(...e)=>o.submitQuiz&&o.submitQuiz(...e)),class:"submit-button"},"Submit Quiz")):(0,n.Q3)("",!0)])])),i.showResults?((0,n.uX)(),(0,n.CE)("div",I,[(0,n.bF)(a,{score:i.score,totalQuestions:i.questions.length},null,8,["score","totalQuestions"]),i.incorrectAnswers.length?((0,n.uX)(),(0,n.CE)("div",E,[O,(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.incorrectAnswers,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t},(0,n.v_)(e.text)+" - Correct Answer: "+(0,n.v_)(e.correctAnswer),1)))),128))])])):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0)])}r(4114);const S={class:"question"},X={class:"answer-list"},W=["value"];function P(e,t,r,s,i,o){return(0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("h2",null,(0,n.v_)(r.question.text),1),(0,n.Lk)("ul",X,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.question.answers,((e,r)=>((0,n.uX)(),(0,n.CE)("li",{key:r},[(0,n.Lk)("label",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",value:e,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedAnswer=e)},null,8,W),[[n.XL,i.selectedAnswer]]),(0,n.Lk)("span",null,(0,n.v_)(o.getLetter(r))+". "+(0,n.v_)(e),1)])])))),128))])])}var V={name:"QuestionComponent",props:{question:{type:Object,required:!0},modelValue:{type:String,default:""}},data(){return{selectedAnswer:this.modelValue}},watch:{selectedAnswer(e){this.$emit("update:modelValue",e)}},methods:{getLetter(e){return String.fromCharCode(97+e)}}};const j=(0,o.A)(V,[["render",P],["__scopeId","data-v-48678f1c"]]);var M=j;const R={class:"result"};function T(e,t,r,s,i,o){return(0,n.uX)(),(0,n.CE)("div",R,[(0,n.Lk)("h2",null,"Your Score: "+(0,n.v_)(r.score)+" / 10",1)])}var F={name:"ResultComponent",props:{score:{type:Number,required:!0}}};const $=(0,o.A)(F,[["render",T],["__scopeId","data-v-1e510532"]]);var H=$,K={name:"QuizView",components:{QuestionComponent:M,ResultComponent:H},data(){return{questions:[{id:1,text:"1. What is the capital of France?",answers:["London","Berlin","Paris","Madrid"],correctAnswer:"Paris"},{id:2,text:"2. What is 2 + 2?",answers:["3","4","5","6"],correctAnswer:"4"},{id:3,text:"3. What is the largest planet in our solar system?",answers:["Saturn","Neptune","Earth","Jupiter"],correctAnswer:"Jupiter"},{id:4,text:'4. Who wrote the famous play "Romeo and Juliet"?',answers:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"],correctAnswer:"William Shakespeare"},{id:5,text:"5. What is the capital of Italy?",answers:["Rome","Paris","Berlin","Madrid"],correctAnswer:"Rome"},{id:6,text:"6. Who painted the Mona Lisa?",answers:["Pablo Picasso","Leonardo da Vinci","Vincent van Gogh","Michelangelo"],correctAnswer:"Leonardo da Vinci"},{id:7,text:"7. What is the chemical symbol for water?",answers:["CO2","NaCl","H2O","O2"],correctAnswer:"H2O"},{id:8,text:'8. Who is the author of "To Kill a Mockingbird"?',answers:["Harper Lee","J.K. Rowling","George Orwell","F. Scott Fitzgerald"],correctAnswer:"Harper Lee"},{id:9,text:"9. What year did the Titanic sink?",answers:["1907","1921","1912","1915"],correctAnswer:"1912"},{id:10,text:"10. What is the tallest mountain in the world?",answers:["K2","Kangchenjunga","Lhotse","Mount Everest"],correctAnswer:"Mount Everest"}],currentQuestionIndex:0,answers:Array(10).fill(""),showResults:!1,score:0,incorrectAnswers:[],timeLeft:10,timer:null}},computed:{currentQuestion(){return this.questions[this.currentQuestionIndex]},currentAnswer:{get(){return this.answers[this.currentQuestionIndex]},set(e){this.answers[this.currentQuestionIndex]=e}},circleColor(){return this.timeLeft>7.5?"green":this.timeLeft>5?"yellow":this.timeLeft>2.5?"orange":"red"}},methods:{startTimer(){this.timeLeft=10,this.timer&&clearInterval(this.timer),this.resetCircleColor(),this.animateProgress(10),this.timer=setInterval((()=>{this.timeLeft--,this.updateCircleColor(),this.timeLeft<=0&&this.nextQuestion()}),1e3)},prevQuestion(){this.currentQuestionIndex>0&&(this.currentQuestionIndex--,this.startTimer())},nextQuestion(){this.currentQuestionIndex<this.questions.length-1?(this.currentQuestionIndex++,this.startTimer()):this.submitQuiz()},submitQuiz(){clearInterval(this.timer),this.score=this.answers.reduce(((e,t,r)=>(t===this.questions[r].correctAnswer?e++:this.incorrectAnswers.push(this.questions[r]),e)),0),this.showResults=!0},animateProgress(e){const t=this.$el.querySelector(".progress-ring__circle"),r=t.r.baseVal.value,n=2*Math.PI*r;t.style.strokeDasharray=`${n} ${n}`,t.style.strokeDashoffset=`${n}`;const s=n-n/e*this.timeLeft;t.style.transition=`stroke-dashoffset ${e}s linear`,t.style.strokeDashoffset=s},resetCircleColor(){const e=this.$el.querySelector(".progress-ring__circle");e.style.stroke="green"},updateCircleColor(){const e=this.$el.querySelector(".progress-ring__circle");this.timeLeft>7.5?e.style.stroke="green":this.timeLeft>5?e.style.stroke="yellow":this.timeLeft>2.5?e.style.stroke="orange":e.style.stroke="red"}},mounted(){this.startTimer()},beforeUnmount(){clearInterval(this.timer)}};const J=(0,o.A)(K,[["render",z],["__scopeId","data-v-65257c89"]]);var B=J;const D=[{path:"/",name:"Home",component:y},{path:"/quiz",name:"Quiz",component:B}],N=(0,l.aE)({history:(0,l.LA)("/quiz-app/"),routes:D});var U=N;(0,n.Ef)(a).use(U).mount("#app")}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,i){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],i=e[c][2];for(var u=!0,a=0;a<n.length;a++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(u=!1,i<o&&(o=i));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,s,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,o=n[0],u=n[1],a=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in u)r.o(u,s)&&(r.m[s]=u[s]);if(a)var c=a(r)}for(t&&t(n);l<o.length;l++)i=o[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkquiz_app"]=self["webpackChunkquiz_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(6286)}));n=r.O(n)})();
//# sourceMappingURL=app.e8de8c72.js.map