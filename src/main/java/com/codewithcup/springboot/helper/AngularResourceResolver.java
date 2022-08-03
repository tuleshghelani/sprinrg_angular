/*package com.codewithcup.springboot.helper;

import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.core.io.Resource;

import java.io.IOException;

public class AngularResourceResolver extends PathResourceResolver {

    @Override
    protected Resource getResource(String resourcePath, Resource location) throws IOException {
        Resource requestedResource = location.createRelative(resourcePath);

        Resource defaultResource=location.createRelative("/index.html");
        Resource resource = requestedResource.exists() && requestedResource.isReadable() ? requestedResource : defaultResource;
        return resource;
    }
}
*/