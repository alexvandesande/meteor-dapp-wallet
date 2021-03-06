/**
Template Controllers

@module Templates
*/

/**
The template to display account information.

@class [template] views_account
@constructor
*/



Template['views_account'].helpers({
    /**
    Gets the currents account properties

    @method (accountProperties)
    */
    'accountProperties': function(){
        return Accounts.findOne(this.account);
    }
});

Template['views_account'].events({
    /**
    Select the current section, based on the radio inputs value.

    @event change input[type="radio"]
    */
    // 'change input[type="radio"]': function(e){
    //     TemplateVar.set('selectedSection', e.currentTarget.value);
    // }
});
