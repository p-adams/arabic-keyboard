const KEYS = [
    
    {l: 'ض'}, {l: 'ص'}, {l: 'ق'}, {l: 'ف'}, {l: 'غ'}, {l: 'ع'}, {l: 'ه'}, {l: 'خ'}, {l: 'ح'}, {l: 'ج'},
    {l: 'ش'}, {l: 'س'}, {l: 'ي'}, {l: 'ب'}, {l: 'ل'}, {l: 'ا'}, {l: 'ت'}, {l: 'ن'}, {l: 'م'}, {l: 'ك'},
    {l: 'ظ'}, {l: 'ط'}, {l: 'ذ'}, {l: 'د'}, {l: 'ز'}, {l: 'ر'}, {l: 'و'}, {l: 'ة'}, {l: 'ث'}, {l: 'ى'},
    {l: 'Clear'},{l: '!'},{l: '.'},{l: 'ئ'}, {l: 'ء'}, {l: 'ؤ'}, {l: 'لا'}, {l: '،'},{l: '؟'},{l: 'Delete'}
]

const NUMERALS = [
    {l: '١'}, {l: '٢'}, {l: '٣'}, {l: '٤'}, {l: '٥'}, {l: '٦'}, {l: '٧'}, {l: '٨'}, {l: '٩'}, {l: '٠'}
]



const SPECIAL_KEYS = [

      {k: 'Space'}

]


var store = {
    state: {
        words: []
    },
    clearScreen: function(){
        return this.state.words.splice(0)
    },
    backspace: function(){
        var position = this.state.words.length
        return this.state.words.splice(position - 1, 1)
    }
}

Vue.component('Screen', {
    template: '#screen',
    data: function() {
        return {
            words: store.state.words,
        }
    },
    computed: {
        letters: function(){
            return this.words.map(function(word){
                return word
            }).join('')
        }
    }
})

Vue.component('Keyboard', {
    props: ['numerals', 'keys', 'special', 'remaining'],
    template: '#keyboard',
    data: function(){
        return {
            words: store.state.words,      
        }
    },
    methods:{
        addLetter: function(letter){
            
            if(letter==='Clear'){
                store.clearScreen()
            }else if(letter==="Delete"){
                store.backspace()
            }else if(letter==='Space'){
                this.words.push(' ')
            }
            else{
                this.words.push(letter)
            }
        }
    }
})

vm = new Vue({
    el: "#app",
    data: {
        numerals: NUMERALS,
        keys: KEYS,
        special: SPECIAL_KEYS,
       
    }
})
