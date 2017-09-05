var playlist = { LP: 'Some where I belong'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })

}


function removeFromPlaylist(playlist, artistName, songTitle) {
  return delete playlist.artistName.songTitle

}
