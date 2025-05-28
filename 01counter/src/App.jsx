import React, { useState, useEffect, useCallback, use } from "react";

const UserSearchApp = () =>{

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchUsers = async () => {
        try{
            const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await reponse.json();

            setUsers(data);
            setFilteredUsers(data);

        }
        catch (error) {
          console.error("Error fetching users:", error);
        }
    }
    fetchUsers()

  },[])


//   memmory save us calll back 

const handleSearch = useCallback((sami) => {
    setFilteredUsers(
        users.filter((user) =>
            user.name.toLowerCase().includes(sami.toLowerCase())
        ),
    );
},
[users]
);


useEffect(()=>{
  handleSearch(search)
},[search,handleSearch]);


return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User Search Filter</h2>
      <input
        type="text"
        placeholder="Search users by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />
      <ul style={{ marginTop: "20px" }}>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};



export default UserSearchApp;
