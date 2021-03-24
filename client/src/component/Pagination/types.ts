interface OwnProps {
  totalRecords?: number;
}

export type Props = OwnProps;

/*
import { RouteComponentProps } from "react-router-dom";
// личные пропсы компонента
interface OwnProps {}

// состояние-пропсы компонента
interface StateProps {}

// пути роута в компоненте
interface RouteProps {}

// дополнительные пропсы от HOC
interface HOCProps {}

// стандартные пропсы от реакта
// события / атрибуты

// итоговые просы
export type Props = OwnProps &
  StateProps &
  HOCProps &
  RouteComponentProps<RouteProps>;

// состояние компонента
export interface State {}
*/