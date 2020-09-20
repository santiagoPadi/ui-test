import { isNil } from '../../../../../helpers'

interface IDataCalculated {
  width: number
  percent: number
}
interface IReturnCalculate {
  likes: IDataCalculated
  dislikes: IDataCalculated
}

export function calculate(id: number): IReturnCalculate {
  const _storage = localStorage.getItem('votes')
  const likes = !isNil(_storage) ? JSON.parse(`${_storage}`)[id]?.likes : 0
  const dislikes = !isNil(_storage) ? JSON.parse(`${_storage}`)[id]?.dislikes : 0

  const likesStylePercent = isNaN(Math.ceil((likes / (likes + dislikes)) * 10)) ? 0 : Math.ceil((likes / (likes + dislikes)) * 10)
  const dislikestylePercent = isNaN(Math.ceil((dislikes / (likes + dislikes)) * 10)) ? 0 : Math.ceil((dislikes / (likes + dislikes)) * 10)
  const likesPercent = isNaN(Math.ceil((likes / (likes + dislikes)) * 100)) ? 0 : Math.ceil((likes / (likes + dislikes)) * 100)
  const dislikesPercent = isNaN(Math.ceil((dislikes / (likes + dislikes)) * 100)) ? 0 : Math.ceil((dislikes / (likes + dislikes)) * 100)
  return {
    likes: {
      width: likesStylePercent,
      percent: likesPercent,
    },
    dislikes: {
      width: dislikestylePercent,
      percent: dislikesPercent,
    },
  }
}
