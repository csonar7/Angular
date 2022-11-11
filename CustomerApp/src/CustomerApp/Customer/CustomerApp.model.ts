import{
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms';
    // Create:- We create a validation object models
    // Connect:- We Connect the validation to the UI
    // Check:-  IsValid, IsDirty

export class Customer{
    CustomerCode: string="";
    CustomerName: string="";
    CustomerAmount: number=0;
    //formCustomerGroup: FormGroup<{}>;

    formCustomerGroup: FormGroup; //create object of FormGroup
    constructor(){
        let _builder= new FormBuilder();
        this.formCustomerGroup=_builder.group({});//use builder to create
        //Control --> Validation
        //1 control --> 1 validation
        this.formCustomerGroup.
                    addControl("CustomerNameControl", 
                        new FormControl('',Validators.required)
                        );
        
        //Create validation for customer code
        // Required, 4 numeric letters
        let validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern('^[0-9]{4,4}$'));

        this.formCustomerGroup.addControl("CustomerCodeControl",
                        new FormControl('',Validators.compose(validationCollection))
                        );


    }
}