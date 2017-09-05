var playlist = { LP: 'Some where I belong'}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}
