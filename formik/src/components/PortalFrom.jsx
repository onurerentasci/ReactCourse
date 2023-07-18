import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
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

function PortalFrom() {
  return (
    <>
      <Formik
        initialValues={{ username: " ", university: " ", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen Üniversitenizi Seçiniz"
            >
              <option value="">Lütfen Üniversitenizi Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsü">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İstanbul Teknik Üniversitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link to="/">Ana forma dön</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalFrom;
