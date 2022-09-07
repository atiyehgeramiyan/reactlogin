import { Post } from "../Adapters/Api";

export const registerPictureAction={url:"Picture",type:"post"};


export default class PictureService
{
    registerPicture(picture)
    {
        return Post(registerPictureAction,picture);
    }
}