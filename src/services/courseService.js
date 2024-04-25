import { toast } from "react-toastify";

const addCourse = async (newCourse) => {
    const res = await fetch('/api', {
      method : 'POST',
      headers : {
        'Context-Type' : 'application/json'
      },
      body : JSON.stringify(newCourse),
    });
    res.ok ? toast.success('Addedd Course Successfully') : toast.error('Failed to add course')
    return
  };

  const deleteCourse = async (id) => {
    const res = await fetch(`/api/${id}`, {
      method : 'DELETE',
    });
    res.ok ? toast.success('Deleted Course Successfully') : toast.error('Failed to delete course')
    return
  }

  const editCourse = async (updatedCourse) => {
    const res = await fetch(`/api/${updatedCourse.id}`, {
      method : 'PUT',
      headers : {
        'Context-Type' : 'application/json'
      },
      body : JSON.stringify(updatedCourse),
    });

    res.ok ? toast.success('Updated Course Successfully') : toast.error('Failed to update course')
    return;
  }

  export { addCourse, deleteCourse, editCourse };