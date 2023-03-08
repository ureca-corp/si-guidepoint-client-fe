import ProfileApiService from "@/infra/profile/api/profile.api";

export const FileUpload = (url: string, file: File) => {
  return ProfileApiService.uploadFile(url, file);
};
