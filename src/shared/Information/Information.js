import Aux from "../../hoc/Aux/Aux";
import Temperature from "../../components/Temperature/Temperature";
import Icon from "../../components/Icon/Icon";
import Description from "../../components/Description/Description";
import Details from "../../components/Details/Details";
import Sun from "../../components/Sun/Sun";
import Time from "../../components/Date/Date";

export const API_KEY = "f652ebe02c8bd200bbd9c7678b813c83";

const information = (props) => {
  return (
    <Aux>
      <Temperature temp={props.temperature} />
      <Description description={props.description} />
      <Icon icon={props.icon} />

      {props.sunrise ? (
        <Aux>
          <Details
            clouds={props.clouds + "%"}
            windSpeed={props.windSpeed + " m/s"}
            humidity={props.humidity + "%"}
          />
          <Sun
            sunrise={new Date(props.sunrise * 1000)}
            sunset={new Date(props.sunset * 1000)}
          />
          <Time timezone={props.timezone} />
        </Aux>
      ) : null}
    </Aux>
  );
};

export default information;
