function mapUser (players: any) {
  const mappedPlayer = players.map((p: any) => {
    return {
      id: p.id,
        name: p.name,
        userName: p.userName,
        gender: p.gender,
        birthday: p.birthday,
        cellphone: p.cellphone,
        mail: p.mail,
        position: p.player.position,
        qualification: p.player.qualification,
        votes: p.player.votes,
        punctuation: Math.round(p.player.qualification / p.player.votes),
        available: p.player.available,
        image: p.image,
    }
  })
  return mappedPlayer;
}

export default mapUser;