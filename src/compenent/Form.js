import React, { useState, useEffect } from "react";

export default function Form(props) {
  // object destructuring
  const { addMember, editMember, duzenlenecekUye } = props;

  useEffect(() => {
    console.log("useEffect çalıştı");
    if (duzenlenecekUye) {
      setForm(duzenlenecekUye);
    }
  }, [duzenlenecekUye]);

  const [form, setForm] = useState(
    duzenlenecekUye || {
      isim: "Barbara",
      email: "barbara@wit.com",
      rol: "Manken Olan",
    }
  );

  const changeHandler = (e) => {
    // object destructuring
    const { name, value } = e.target;

    // form state'ini kopyalıyorum.
    // form state'ini güncelliyorum.
    const newForm = { ...form, [name]: value };

    setForm(newForm);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);

    if (duzenlenecekUye) {
      editMember(form);
    } else {
      addMember(form);
    }
  };

  return (
    <div>
      <h2>Üye Formu</h2>
      {/* <form onSubmit={(e) => submitHandler(e)}> */}
      <form onSubmit={submitHandler}>
        <label>
          İsim
          <input
            type="text"
            name="isim"
            value={form.isim}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <label>
          Rol
          <input
            type="text"
            name="rol"
            value={form.rol}
            onChange={(e) => changeHandler(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
