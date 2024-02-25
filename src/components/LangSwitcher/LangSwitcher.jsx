import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/locale/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  return (
    <select
      value={lang}
      name="langSwitcher"
      id="langSwitcher"
      onChange={(evt) => dispatch(changeLang(evt.target.value))}
    >
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="pl">PL</option>
    </select>
  );
}
