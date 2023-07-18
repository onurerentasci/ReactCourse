import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
/* passwordRules aşağıda yer alan password kısmında kullanılır. 
yukarıdaki ifade şifrenin 1 büyük 1 küçük 1 sayı kurallarına uymasını sağlar */

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen doğru bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(8, "Lütfen en az 8 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Lütfen şifre giriniz"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler aynı değil")
    /* oneOf ile password referans alınır passwordConfirm ile aynı değerin olup olmadığı karşılaştırarak şartları sağlar */
    .required("Lütfen şifreyi tekrar giriniz"),
});

export const advencedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı adı zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsü", "odtü", "itü"], "Lütfen Üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),

  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
