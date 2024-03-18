class VideoConverter {
  convertVideo(fileName, format) {
    console.log(`Converting ${fileName} to ${format}`);

    return `${fileName}.${format}`;
  }
}

class VideoCompressor {
  compressVideo(fileName) {
    console.log(`Compressing ${fileName}`);

    return `${fileName} (Compressed)`;
  }
}

class ThumbnailExtractor {
  extractThumbnail(fileName) {
    console.log(`Extract thumbnail from ${fileName}`);

    return `${fileName} (Thumbnail)`;
  }
}

/* 
  Facade

  Wrapper around other classes to simplify 
  usage of them.
  We hiding necessary logic in the Facade.
*/
class VideoProcessingFacade {
  convertAndHandleVideo(fileName, format) {
    const convert = new VideoConverter();
    const compressor = new VideoCompressor();
    const thumbnailExtractor = new ThumbnailExtractor();

    const convertedFile = convert.convertVideo(fileName, format);
    const compressedFile = compressor.compressVideo(convertedFile);
    const thumbnail = thumbnailExtractor.extractThumbnail(convertedFile);

    console.log(`${convertedFile}, ${compressedFile}, ${thumbnail}`);
    console.log(`Finished processing ${fileName}`);
  }
}

const videoFacade = new VideoProcessingFacade();
videoFacade.convertAndHandleVideo("MyVideo", "mp4");
