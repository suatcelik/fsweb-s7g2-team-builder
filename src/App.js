import React, { useState } from "react";
import Form from "./components/Form";
function App() {
  const initialMembers = [
    { isim: "Emre", email: "emre@workintech.com.tr", rol: "FullStack Dev" },
    { isim: "Ömer", email: "omer@workintech.com.tr", rol: "FrontEnd Dev" },
    { isim: "Erhan", email: "erhan@workintech.com.tr", rol: "FrontEnd Dev" },
  ];
  const [members, setMembers] = useState(initialMembers);
  const [editingMember, setEditingMember] = useState(null);

  const addMemberToTheTeam = (memberObj) => {
    // yeni bir array açıyorum. [] -> boş array
    // spread ile members array'ini yeni array'e kopyalıoyorum. [...members]
    // yeni array'e yeni üyeyi ekliyorum. [...members, member]
    setMembers([...members, memberObj]);
  };

  const updateMemberToTheTeam = (memberUpdatedObj) => {
    const updatedMembersArray = members.map((m) => {
      if (m.email === editingMember.email) {
        return memberUpdatedObj;
      } else {
        return m;
      }
    });
    setEditingMember(null);
    setMembers(updatedMembersArray);
  };

  return (
    <div className="App">
      <Form
        addMember={addMemberToTheTeam}
        editMember={updateMemberToTheTeam}
        duzenlenecekUye={editingMember}
      />
      {/* <Form addMember={(d) => addMemberToTheTeam(d)} /> */}
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.isim} - {member.email} - {member.rol}{" "}
            <button onClick={() => setEditingMember(member)}>Edit Me</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* 
function oldFuntion(param, operator) {
  if (operator === "add") {
    return param + 1;
  } else if (operator === "sub") {
    return param - 1;
  }
}

oldFuntion(5, "add");
oldFuntion("add", 5);
// mdn object initializer
function newFunction(properties) {
  const {param, operator} = properties;

  if (operator === "add") {
    return param + 1;
  } else if (operator === "sub") {
    return param - 1;
  }
}

newFunction({param: 5, operator: "add"});

 */
export default App;
