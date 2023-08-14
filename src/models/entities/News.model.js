import { ErrorInvalidArgument } from "../error/errors.model.js";
import { Uid } from "../../utils/UiD.js";

export default class News {
  #id;
  #title;
  #date;
  #image;
  #externalLink;

  constructor({ title, date, image, externalLink }) {
    this.#id = this.validateId(Uid());
    this.#title = this.validateTitle(title);
    this.#date = this.validateDate(date);
    this.#image = this.validateImage(image);
    this.#externalLink = this.validateExternalLink(externalLink);
  }

  // Validaciones
  validateId(id) {
    if (!id) {
      throw new ErrorInvalidArgument("ID is required");
    }
    return id;
  }

  validateDate(date) {
    if (!date || typeof date !== "string") {
      throw new ErrorInvalidArgument("Date is required and must be a string");
    }
    return date;
  }

  validateTitle(title) {
    if (!title || typeof title !== "string") {
      throw new ErrorInvalidArgument("Title is required and must be a string");
    }
    return title;
  }

  validateImage(image) {
    if (!image || typeof image !== "string") {
      throw new ErrorInvalidArgument("Image is required and must be a string");
    }
    return image;
  }

  // Validación de externalLink
  validateExternalLink(externalLink) {
    if (!externalLink || typeof externalLink !== "string") {
      throw new ErrorInvalidArgument(
        "ExternalLink is required and must be a string"
      );
    }
    return externalLink;
  }

  // Geters

  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get date() {
    return this.#date;
  }
  get image() {
    return this.#image;
  }
  get externalLink() {
    return this.#externalLink;
  }

  // Method to access data without exposing private fields
  dto() {
    return {
      id: this.#id,
      title: this.#title,
      date: this.#date,
      image: this.#image,
      externalLink: this.#externalLink,
    };
  }
}
