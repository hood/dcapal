import React from "react";
import { Chip } from "../../../ui/atoms/chip/chip";

export const CcyGroup = ({ ccys, selected, setSelected, ...props }) => (
  <div data-testid="ccyGroup" className="flex flex-wrap gap-2">
    {(ccys.length ? ccys : ["aa", "bb"]).map((c) => (
      <Chip key={c} isSelected={selected === c} handleClick={setSelected}>
        {c}
      </Chip>
    ))}
  </div>
);
