import { Pipe, PipeTransform } from '@angular/core';

/** Returns a default CV icon when the cv has no picture. */
@Pipe({ name: 'defaultImage', standalone: true })
export class DefaultImagePipe implements PipeTransform {
  transform(path: string | null | undefined, fallback = 'cv.svg'): string {
    return path?.trim() ? path : fallback;
  }
}
