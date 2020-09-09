/* FormInput
FormInput:{
    "error": "A custom error message to be manually shown on an element(validation errors are generated on their own). This error will always  be visible (if you want to remove it, use a dynamic prop).",
    "errors": "An array of custom error messages to show on an element (see above).",;
    "error-behavior": "Defines when error messages are shown. Can be blur (default), submit, or live. Anytime a <FormulateForm> element is submitted errors are also shown. live will always display all error messages for the input.",;
    "help": "  Help text to be displayed with the input.",;
    "help-position": "The position of the help text before or after (default is after).",;
    "id": "The id of the input (defaults to an auto-generated one)",;
    "label": "  A descriptive label for the input element.",;
    "label-position": "Most input elements place the label before the input by default. The box classification places labels after by default, but either can be overridden with this prop.",;
    "name": "  Adds a name attribute, and when used with <FormulateForm> this is the key of the field. If no name is defined a random hash will be assigned",;
    "options": "Array or object of options (select or box classifications)",;
    "place-holder": "The placeholder attribute of the element (if applicable)",;
    "show-errors": "When true this forces an element to show it’s errors regardless of the state of the error-behavior.",;
    "type": "  Required. The type of input element. See the input library for a full range of options.",;
    "validation": "A string or array of validation rules. See input validation",;
    "validation-name": "The name to use in validation error messages. By default,this uses the name prop if available and falls back to the label prop. It can be explicitly overridden here if needed.",;
    "validation-messages": " See custom validation messages.",;
    "validation-rules": "See custom validation rules.",;
    "value": "An initial unbound value (use when v-model or form binding is not a good option)",;
    "disableErrors": " 	Will not show any error messages when set to true.";
}
*/

/*
Result {
    inputId: string;
    answer: string;
}
*/

/* Form: {
    inputs: FormInput[];
    results: any[];// (mainly text or number)
}
*/

/* Reflection:{
    title:
    text:
}
*/

/* Activity:{
    id: string;
    name: string;
    blockIds: string[];
    prompt: string;
    preActivity: Form,
    postActivity: Form,
    reflections: Reflection[];
}
*/

/* Standard {
    name: string;
    id: string;
    description: string;
}

/* Module:{
    id: string,
    name: string,
    description: string,
    standards: Standard[],
    preModule: Form,
    postModule: Form,
    activities: Activity[],

}

{
    "name": "";
    "description": "";
    "standards": Standard[];
    "preActivity": Form;
    "postActivity": Form;
    "activities": Activity[];
}
*/