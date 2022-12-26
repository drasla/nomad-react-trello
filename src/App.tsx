import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "recoil/atoms";

export const App = () => {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelector);
    const onMinutesChanges = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };

    return (
        <div>
            <input
                value={minutes}
                onChange={onMinutesChanges}
                type={"number"}
                placeholder={"Minutes"}
            />
            <input value={hours} type={"number"} placeholder={"Hours"} />
        </div>
    );
};