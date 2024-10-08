import { LinkIncludingShortenedCollectionAndTags } from "@/types/global";

export function screenshotAvailable(
  link: LinkIncludingShortenedCollectionAndTags
) {
  return (
    link &&
    link.image &&
    link.image !== "pending" &&
    link.image !== "unavailable"
  );
}

export function pdfAvailable(link: LinkIncludingShortenedCollectionAndTags) {
  return (
    link && link.pdf && link.pdf !== "pending" && link.pdf !== "unavailable"
  );
}

export function readabilityAvailable(
  link: LinkIncludingShortenedCollectionAndTags
) {
  return (
    link &&
    link.readable &&
    link.readable !== "pending" &&
    link.readable !== "unavailable"
  );
}

export function monolithAvailable(
  link: LinkIncludingShortenedCollectionAndTags
) {
  return (
    link &&
    link.monolith &&
    link.monolith !== "pending" &&
    link.monolith !== "unavailable"
  );
}

export function previewAvailable(
  link: LinkIncludingShortenedCollectionAndTags
) {
  return (
    link &&
    link.preview &&
    link.preview !== "pending" &&
    link.preview !== "unavailable"
  );
}
