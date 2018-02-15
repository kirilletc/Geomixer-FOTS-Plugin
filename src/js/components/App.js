import React, { Component } from 'react';
// import ...

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        //1
       // this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        let counter = ++this.state.counter;

        this.setState({counter});
    }

    render() {
        return (
            <div class="container-fluid cont-main">
                <form class="form-horizontal">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="textinput1-1">Широта</label>
                                <input id="textinput1-1" name="textinput" type="number" placeholder="xx,xx" class="form-control input-md">
                                    <input id="textinput2-1" name="textinput" type="number" placeholder="xx,xx" class="form-control input-md">
                                        <input id="textinput3-1" name="textinput" type="number" placeholder="xx,xx" class="form-control input-md">
                                            <input id="textinput4-1" name="textinput" type="number" placeholder="xx,xx" class="form-control input-md">
                                                <input id="textinput5-1" name="textinput" type="number" placeholder="xx,xx" class="form-control input-md">
                            </div>
                            <div class="col-md-6">
                                <label class="control-label" for="textinput2-1">Долгота</label>
                                <input id="textinput1-2" name="textinput" type="number" placeholder="yy,yy" class="form-control input-md">
                                    <input id="textinput2-2" name="textinput" type="number" placeholder="yy,yy" class="form-control input-md">
                                        <input id="textinput3-2" name="textinput" type="number" placeholder="yy,yy" class="form-control input-md">
                                            <input id="textinput4-2" name="textinput" type="number" placeholder="yy,yy" class="form-control input-md">
                                                <input id="textinput5-2" name="textinput" type="number" placeholder="yy,yy" class="form-control input-md">
                            </div>
                        </div>
                        <div class="spacer1"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="datetimepicker6">Начало</label>
                                <div class='input-group date' id='datetimepicker6'>
                                    <input type='text' class="form-control" />
                                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="control-label" for="datetimepicker7">Конец</label>
                                <div class='input-group date' id='datetimepicker7'>
                                    <input type='text' class="form-control" />
                                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="spacer2"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="time-step">Шаг по времени</label>
                            </div>
                            <div class="col-md-6">
                                <input id="time-step" name="textinput" type="number" placeholder="часов" class="form-control input-md">
                            </div>
                        </div>
                        <div class="spacer1"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="name-zamer">Имя замера</label>
                            </div>
                            <div class="col-md-6">
                                <input id="name-zamer" name="textinput" type="text" placeholder="мой замер" class="form-control input-md">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label class="control-label" for="checkboxes">Дополнительные опции</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="checkbox">
                                    <label for="checkboxes-1">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-1" value="1">
                                            Option one
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label for="checkboxes-2">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-2" value="2">
                                            Option two
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label for="checkboxes-3">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-3" value="3">
                                            Option three
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="checkbox">
                                    <label for="checkboxes-4">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-4" value="4">
                                            Option four
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label for="checkboxes-5">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-5" value="5">
                                            Option five
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label for="checkboxes-6">
                                        <input type="checkbox" name="checkboxes" id="checkboxes-6" value="6">
                                            Option six
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="spacer2"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <button id="button2id" name="button2id" class="btn btn-danger">Сбросить</button>
                            </div>
                            <div class="col-md-6">
                                <button id="button1id" name="button1id" class="btn btn-success">Расчет</button>
                            </div>
                        </div>
                        <div class="spacer3"></div>
                        <div class="footer-ok">
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="control-label gray" for="selectbasic">Прошлые замеры</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <select id="selectbasic" name="selectbasic" class="form-control">
                                        <option value="1">Option one</option>
                                        <option value="2">Option two</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

/*
const App = (props) => {
    return (
        <div>{props.txt}</div>
    )
}
*/
export default App;