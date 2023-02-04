function validateUserInput(
  name: string,
  platform: string,
  yearOfRelease: number,
  genre: string,
  ratingESRB: string,
  goodGame: boolean
) {
  if (name.length > 12) {
    throw Error(
      `name is too long, max character limit 12 got: ${name.length} `
    );
  }

  if (yearOfRelease < 2000) {
    throw Error(`must be newer games from 2000+ got ${yearOfRelease}`);
  }
}

export default validateUserInput;
