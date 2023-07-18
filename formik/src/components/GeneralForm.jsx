import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

import "../styles/App.css";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  /* bu ifade formdaki buttona basıldıktan sonra disable işleminin 1 saniye süreceğini belirtir */
  actions.resetForm();
  /* tıkladıktan 1 saniye sonra formu temizler */
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    /* modüller üstteki gibi {} içinde kullanılacak ifadeler tek tek çağırılmaz değişkene atanırsa kullanım şekli, 
    değişkenAdi.modulAdi.initialValuesİcindekiDeğerlerdenBiri */
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: basicSchema,
      /* validation schema yup ile tanımlanan şartların sağlanıp sağlanmadığını kontrol etmeyi sağlar ilgili kontrol ögeleri schemas altında yer almaktadır */
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Mail Adresinizi Giriniz"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        {/* classname ile eğer bir email error varsa input-error içindeli style ögelerinin işlenmesi sağlanır */}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          min={18}
          max={99}
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Yaşınızı Giriniz"
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Şifrenizi Giriniz"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          id="passwordConfirm"
          placeholder="Şifrenizi Tekrar Giriniz"
          className={errors.passwordConfirm ? "input-error" : ""}
        />
        {errors.passwordConfirm && (
          <p className="error">{errors.passwordConfirm}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        KAYDET
      </button>
      {/* submit yaptıktan sonra kısa bir süre butonun disabled olarak kalması sağlanır */}
      <Link to="/portal">Portal formuna git</Link>
    </form>
  );
}

export default GeneralForm;
