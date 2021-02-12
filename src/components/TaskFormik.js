import { useFormik } from 'formik';
import * as Yup from "yup";

function TaskForm(props) {

    const schema = Yup.object({
        task: Yup.string().required("Required"),
        dayTime: Yup.string().required("Required")
    });
    
    const formik = useFormik({
        initialValues: {
            task: "",
            dayTime: "",
            reminder: false
        },
        validationSchema: schema,
        onSubmit: (values) => {
            // console.log(JSON.stringify(values));
            props.addNewTask(values);
            formik.resetForm({
                task: "",
                dayTime: "",
                reminder: false
            });
        },
        validationSchema: schema
    });

    return (
        <form className="my-3" onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label>Task</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="task" 
                    placeholder="Add Task" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.task}
                />
                {formik.touched.task && formik.errors.task ? <div style={{color: 'red'}}>{formik.errors.task}</div>: null}
            </div>

            <div className="form-group">
                <label>Day & Time</label>
                <input 
                    className="form-control" 
                    type="date" 
                    name="dayTime" 
                    placeholder="Add Day & Time" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dayTime}
                />
                {formik.touched.dayTime && formik.errors.dayTime ? <div style={{color: 'red'}}>{formik.errors.dayTime}</div>: null}
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    name="reminder" 
                    onChange={formik.handleChange}
                    checked={formik.values.reminder}
                />
                <label>Set Reminder</label>
            </div>
        
            <button type="submit" className="btn btn-dark btn-block">Save Task</button>
        </form>
    );
}

export default TaskForm;
