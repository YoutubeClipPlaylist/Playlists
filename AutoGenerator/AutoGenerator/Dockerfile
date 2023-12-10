# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/runtime:8.0-jammy AS debug
USER app
WORKDIR /app

FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/nightly/sdk:8.0-jammy-aot AS build
ARG BUILD_CONFIGURATION=Release
ARG TARGETARCH
WORKDIR /src

COPY *.csproj .
RUN dotnet restore -a $TARGETARCH

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
COPY . .
RUN dotnet publish -a $TARGETARCH -c $BUILD_CONFIGURATION -o /app/publish

FROM mcr.microsoft.com/dotnet/nightly/runtime-deps:8.0-jammy-chiseled-aot AS final

ENV PATH="/app:$PATH"

COPY --link --from=publish --chown=$APP_UID:$APP_UID /app/publish /app

WORKDIR /output
VOLUME [ "/output" ]

USER $APP_UID

ENTRYPOINT ["/app/AutoGenerator"]