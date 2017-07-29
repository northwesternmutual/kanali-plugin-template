package main

import (
	"context"
	"net/http"
	"testing"

	"github.com/northwesternmutual/kanali/controller"
	"github.com/northwesternmutual/kanali/spec"
	opentracing "github.com/opentracing/opentracing-go"
	"github.com/stretchr/testify/assert"
)

func TestOnRequest(t *testing.T) {
	assert := assert.New(t)
	assert.Nil(Plugin.OnRequest(context.Background(), spec.APIProxy{}, controller.Controller{}, &http.Request{}, opentracing.StartSpan("test span")))
}

func TestOnResponse(t *testing.T) {
	assert := assert.New(t)
	assert.Nil(Plugin.OnResponse(context.Background(), spec.APIProxy{}, controller.Controller{}, &http.Request{}, nil, opentracing.StartSpan("test span")))
}
