export interface MediaAsset {
  id: string
  type: 'mp4' | 'gif' | 'png' | 'jpeg'
  src: string
  filename: string
  title: string
}

export const mediaAssets: MediaAsset[] = [
  {
    id: 'jpeg-1',
    type: 'jpeg',
    src: '/media/Director.jpg',
    filename: 'Director.jpg',
    title: 'Director Jigglypuff',
  },
  {
    id: 'gif-1',
    type: 'gif',
    src: '/media/Jiggly banner.gif',
    filename: 'Jiggly banner.gif',
    title: 'Jigglypuff Banner',
  },
  {
    id: 'mp4-1',
    type: 'mp4',
    src: '/media/JIgglyCard.mp4',
    filename: 'JIgglyCard.mp4',
    title: 'Jigglypuff Card Animation',
  },
  {
    id: 'mp4-2',
    type: 'mp4',
    src: '/media/JigglyRorschach.mp4',
    filename: 'JigglyRorschach.mp4',
    title: 'Jigglypuff Rorschach',
  },
  {
    id: 'png-1',
    type: 'png',
    src: '/media/JK LOGO old.PNG',
    filename: 'JK LOGO old.PNG',
    title: 'JK Logo (Original)',
  },
  {
    id: 'png-2',
    type: 'png',
    src: '/media/JKIndex.png',
    filename: 'JKIndex.png',
    title: 'JK Index',
  },
  {
    id: 'mp4-3',
    type: 'mp4',
    src: '/media/JKIndexStatdium.mp4',
    filename: 'JKIndexStatdium.mp4',
    title: 'JK Index Stadium',
  },
  {
    id: 'mp4-4',
    type: 'mp4',
    src: '/media/Jkinex bg moving.mp4',
    filename: 'Jkinex bg moving.mp4',
    title: 'JK Index Background',
  },
  {
    id: 'mp4-5',
    type: 'mp4',
    src: '/media/JKing.mp4',
    filename: 'JKing.mp4',
    title: 'Jigglypuff King',
  },
  {
    id: 'mp4-6',
    type: 'mp4',
    src: '/media/JKSong.mp4',
    filename: 'JKSong.mp4',
    title: 'Jigglypuff Theme Song',
  },
  {
    id: 'mp4-7',
    type: 'mp4',
    src: '/media/JKWalking.mp4',
    filename: 'JKWalking.mp4',
    title: 'Jigglypuff Walking',
  },
]

