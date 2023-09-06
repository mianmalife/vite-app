import { useState } from "react";
import { initialTravelPlan } from "./bplaces";
import { olCLs } from "./travalPlan.module.css";

function TravelTree({ id, parentById, parentId, onComplete }) {
  const place = parentById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childIds.length > 0 && (
        <ol className={olCLs}>
          {childIds.map((childId) => (
            <TravelTree
              key={childId}
              parentId={id}
              id={childId}
              parentById={parentById}
              onComplete={onComplete}
            ></TravelTree>
          ))}
        </ol>
      )}
    </li>
  );
}

function TravalPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const childIds = root.childIds;
  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => {
        return id !== childId;
      }),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }
  return (
    <ol className={olCLs}>
      {childIds.map((id) => (
        <TravelTree
          key={id}
          id={id}
          parentId={0}
          parentById={plan}
          onComplete={handleComplete}
        ></TravelTree>
      ))}
    </ol>
  );
}

export default TravalPlan;
