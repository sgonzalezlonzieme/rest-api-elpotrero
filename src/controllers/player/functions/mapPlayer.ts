function mapPlayer (players: any) {
  const mappedPlayer = players.map((p: any) => {
    return {
      id: p.id,
      name: p.user[0].name,
      userName: p.user[0].userName,
      gender: p.user[0].gender,
      birthday: p.user[0].birthday,
      cellphone: p.user[0].cellphone,
      mail: p.user[0].mail,
      position: p.position,
      qualification: p.qualification,
      votes: p.votes,
      punctuation: Math.round(p.qualification / p.votes),
      available: p.available,
      image: p.user[0].image,
    }
  })
  return mappedPlayer;
}

export default mapPlayer;