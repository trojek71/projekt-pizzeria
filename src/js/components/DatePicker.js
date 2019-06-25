import {BaseWidget} from './BaseWidget.js';
import {utils} from '../utils.js';
//import {AmountWidget} from './AmountWidget.js';
import {select,settings} from '../settings.js';

export class DatePicker extends BaseWidget{
  constructor(wrapper){
    super (wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;
    // thisWidget.dom.input= {};
    thisWidget.dom.input= thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);
    thisWidget.initPlugin();

  }
  initPlugin(){
    const thisWidget = this;
    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = thisWidget.minDate + settings.datePicker.maxDaysInFuture;
    //const date= new Date();
    flatpickr(thisWidget.dom.input, {
      dateFormat: 'd-m-Y',
      defaultDate:thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: new Date().fp_incr(14),
      firstDayOfWeek: 1,
      "disable": [
        function(date) {

          return (date.getDay() === 1 );

        }
      ],

    });
  }

  parseValue(newValue){
    return newValue;
  }

  isValid(newValue){
    return true;
  }

  renderValue(){
    const thisWidget= this;

    //console.log('widget value:', thisWidget.value);
  }

  datePicker(){

  }

}



