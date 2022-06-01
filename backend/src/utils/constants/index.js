const responseMessages = {
  NOT_FOUND: {
    kiny: "Ibyo mushaka ntibibashije kuboneka",
    en: "The resources was not found",
  },
  INTERNAL_SERVER_ERROR: {
    kiny: "Harikibazo kibaye muri system mwongere mukanya",
    en: "Internal server error",
  },
  UNKOWN_ERROR: {
    kiny: "Harikibazo kibayemo mwongere mugerageze",
    en: "Unknown error occured",
  },
  BAD_REQUEST: {
    kiny: "Haramakosa yabayemo ikifuzo cyanyu sisteme iracyanze",
    en: "Bad request",
  },
  UNAUTHORIZED: {
    kiny: "Ibyo mwushaka ntimubifitiye  uburenganzira, ",
    en: "Unathorized",
  },
  FORBIDDEN: { kiny: "Birabujijwe", en: "Forbidden" },
  SUCCESS: {
    kiny: "Ibyo mwasabye byakoze neza!.",
    en: "Request was successful",
  },
};
exports.responseMessages = responseMessages;
