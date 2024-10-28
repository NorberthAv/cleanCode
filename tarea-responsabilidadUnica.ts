
(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlElement {
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor(
            {
                id,
                type,
            }: HtmlElement
        ) {
            this.id = id;
            this.type = type;
        }
    }
    interface InputAttributes extends HtmlElement {
        value: string;
        placeholder: string;
    }

    class InputAttributes {

        
        constructor(
            public value: string,
            public placeholder: string,
            public id: string
        ) { 
            this.id = id;
            this.value = value;
            this.placeholder = placeholder;
        }

    }

    class InputEvents extends InputAttributes {
        constructor(value: string, placeholder: string, id: string) {
            super(value, placeholder, id);
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()

