import React, {Component} from 'react'
import moment from 'moment'
import {ErrorMessage, Field, Form, Formik} from "formik";

class TodoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    onSubmit = value => {
        console.log(value)
    }

    validate(values) {
        let errors = {};
        if (!values.description) {
            errors.description = "Enter a Description."
        } else if (values.description.length < 5) {
            errors.description = "Enter at least 5 character in description."
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid target date."
        }

        return errors;
    }

    render() {
        let {description, targetDate} = this.state

        return (
            <>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </>
        )
    }
}

export default TodoComponent