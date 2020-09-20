export const selectVote = (setSelected: React.Dispatch<React.SetStateAction<boolean | null>>, status: boolean) => {
  setSelected(status)
  const _storage = localStorage.getItem('votes')
  if (_storage) {
    let _actual = JSON.parse(_storage)
    if (status) {
      _actual[0].likes = _actual[0].likes + 1
    } else {
      _actual[0].dislikes = _actual[0].dislikes + 1
    }
    localStorage.setItem('votes', JSON.stringify(_actual))
  }
}
