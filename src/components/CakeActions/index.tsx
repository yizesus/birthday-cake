import { Fragment } from "react/jsx-runtime";
import {
  TbPlayerPlayFilled,
  TbPlayerPauseFilled,
  TbInfoCircleFilled,
  TbFlame,
  TbFlameOff,
} from "react-icons/tb";
import { useCallback } from "react";

const buttonStyle = {
  color: "#ffffff",
  opacity: 0.9,
  borderWidth: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000",
};

export const CakeActions = ({
  run,
  start,
  pause,
  toggleLightCandle,
  setRun,
  playing,
  paused,
  candleVisible,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) => {
  const guide = useCallback(() => setRun(true), [setRun]);

  const actions = useCallback(() => {
    return (
      <Fragment>
        {!playing || paused ? (
          <button id="start" style={buttonStyle} onClick={start}>
            {/* Start */}
            <TbPlayerPlayFilled />
          </button>
        ) : null}
        {playing && !paused ? (
          <button id="pause" style={buttonStyle} onClick={pause}>
            {/* Pause */}
            <TbPlayerPauseFilled />
          </button>
        ) : null}
        <button
          id="toggle-candle"
          style={buttonStyle}
          onClick={toggleLightCandle}
        >
          {/* {candleVisible ? "Blow out" : "Light"} */}
          {candleVisible ? <TbFlameOff /> : <TbFlame />}
        </button>
        {!playing ? (
          <button id="user-guide" style={buttonStyle} onClick={guide}>
            {/* User guide */}
            <TbInfoCircleFilled />
          </button>
        ) : null}
      </Fragment>
    );
  }, [
    candleVisible,
    guide,
    pause,
    paused,
    playing,
    start,
    toggleLightCandle,
  ]);

  const guideActions = useCallback(() => {
    return (
      <Fragment>
        <button id="start" style={buttonStyle} onClick={start} disabled={run}>
          {/* Start */}
          <TbPlayerPlayFilled />
        </button>
        <button id="pause" style={buttonStyle} onClick={pause} disabled={run}>
          {/* Pause */}
          <TbPlayerPauseFilled />
        </button>
        <button
          id="toggle-candle"
          style={buttonStyle}
          onClick={toggleLightCandle}
          disabled={run}
        >
          {/* {candleVisible ? "Blow out" : "Light"} */}
          {candleVisible ? <TbFlameOff /> : <TbFlame />}
        </button>
      </Fragment>
    );
  }, [candleVisible, pause, run, start, toggleLightCandle]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        padding: 16,
        height: 50,
        // border: "1px solid white",
      }}
    >
      {run ? guideActions() : actions()}
    </div>
  );
};
