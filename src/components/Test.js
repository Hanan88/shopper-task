import React, { useState, useEffect } from "react";

const Test = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const Catalogues = [
    {
      id: "01",
      name: "Chicken"
    },
    {
      id: "02",
      name: "Beef"
    },
    {
      id: "03",
      name: "Lamb"
    },
    {
      id: "04",
      name: "Pork"
    },
    {
      id: "05",
      name: "Seafood"
    }
  ];
  
  useEffect(() => {
    setList(Catalogues);
  }, []);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  console.log(isCheck);

  const catalog = list.map(({ id, name, index }) => {
    return ( 
        <input
          key={index}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        
    );
  });

  return (
    <div>
      <input
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All
      {catalog}
    </div>
  );
};

export default Test;